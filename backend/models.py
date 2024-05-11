from database import Base
from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey, func, DateTime, Boolean,  Enum as SQLEnum, Enum
from sqlalchemy.orm import relationship

# Autn, admin, user

class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(length=500))
    email = Column(String(length=500), unique=True)
    hashed_password = Column(String(length=500))
    refresh_tokens = relationship(
        "RefreshToken", back_populates="user", order_by="RefreshToken.expires_at.desc()")


class RefreshToken(Base):
    __tablename__ = "refresh_tokens"

    id = Column(Integer, primary_key=True, index=True)
    token = Column(String(length=7000), index=True, unique=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    expires_at = Column(DateTime)

    user = relationship("Users", back_populates="refresh_tokens")

# Centra, etc

class Appointment(Base):
    __tablename__ = "appointment"

    id = Column(Integer, primary_key=True, index=True)
    shipping_id = Column(Integer, ForeignKey("shipping.id"))
    receiver_name = Column(String)
    pickup_time = Column(Date)

    shipping = relationship("Shipping", backref="appointment")

class Centra(Base):
    __tablename__ = "centra"

    id = Column(Integer, primary_key=True, index=True)
    location = Column(String)

class CheckpointData(Base):
    __tablename__ = "checkpoint_data"

    id = Column(Integer, primary_key=True, index=True)
    arrival_date = Column(Date)
    collection_id = Column(Integer, ForeignKey("shipping_collection.id"))

class Expedition(Base):
    __tablename__ = "expedition"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)

class PackageData(Base):
    __tablename__ = "package_data"

    id = Column(Integer, primary_key=True, index=True)
    shipping_collection_id = Column(Integer)
    centra_id = Column(Integer, ForeignKey("centra.id"))
    weight = Column(Float)

    centra_owner = relationship("Centra", backref="package_data")

class RescaledPackageData(Base):
    __tablename__ = "rescaled_package_data"

    id = Column(Integer, primary_key=True, index=True)
    package_id = Column(Integer, ForeignKey("package_data.id"))
    rescaled_weight = Column(Float)

    original_package = relationship("PackageData", backref="rescaled_package_data")

class ReceptionPackage(Base):
    __tablename__ = "reception_package"

    id = Column(Integer, primary_key=True, index=True)
    package_id = Column(Integer, ForeignKey("package_data.id"))
    final_weight = Column(Float)
    receival_date = Column(Date)
    centra_id = Column(Integer, ForeignKey("centra.id"))

    source_centra = relationship("Centra", backref="reception_package")
    original_package = relationship("PackageData", backref="reception_package")

class Shipping(Base):
    __tablename__ = "shipping"

    id = Column(Integer, primary_key=True, index=True)
    departure_date = Column(Date)
    expedition_id = Column(Integer, ForeignKey("expedition.id"))

    expedition = relationship("Expedition", backref="shipping")

class ShippingCollection(Base):
    __tablename__ = "shipping_collection"

    id = Column(Integer, primary_key=True, index=True)
    total_weight = Column(Float)
    total_package = Column(Integer)
    shipping_id = Column(Integer, ForeignKey("shipping.id"))

    shipping = relationship("Shipping", backref="shipping_collection")