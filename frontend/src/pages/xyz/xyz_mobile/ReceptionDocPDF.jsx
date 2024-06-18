import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import logo from "../../../assets/desktop/mofera.svg";
import { useParams } from 'react-router-dom';
import { searchPackage, searchReceptionPackages } from '../../../../api/xyzAPI';
// import { getReceptionDetails } from '../../../../api/xyzAPI'; // Assuming you have an API function to get the reception details
const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      paddingTop: 10,
      paddingLeft:40,
      paddingRight: 40,
      lineHeight: 1.5,
      color: '#000000',
      font: 'Helvetica',
    },
    hr: {
        borderBottomWidth: 1,
        borderColor: '#000',
        marginBottom: 10,
    },    
    section: {
      marginBottom: 10,
    },
    logo: {
        width: 100
    },
    spaceBetween : {
        flex : 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between', 
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    text: {
      fontSize: 12,
      marginBottom: 7,
    },
    bulletpoint: {
        fontSize: 12,
        marginBottom: 6,
        marginLeft: 10,
      },
    // table: {
    //   display: 'table',
    //   width: 'auto',
    //   borderStyle: 'solid',
    //   borderWidth: 1,
    //   borderColor: '#000',
    //   marginBottom: 10,
    // },
    // tableRow: {
    //   flexDirection: 'row',
    // },
    theader: {
        marginTop : 5,
        fontSize : 10,
        fontStyle: 'bold',
        paddingTop: 4 ,
        paddingLeft: 7 ,
        flex:1,
        backgroundColor : '#DEDEDE',
        borderColor : 'whitesmoke',
        borderRightWidth:1,
        borderBottomWidth:1,
        color: '#000000'
    },
    tbody:{ 
        fontSize : 9, 
        paddingTop: 4, 
        paddingLeft: 7, 
        flex:1, 
        borderColor : 'whitesmoke', 
        borderRightWidth:1, 
        borderBottomWidth:1,
        color: '#000000'
    },
    signBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        borderTop: '1px solid black',
        paddingTop: 8,
        marginTop: 5,
    },
    signText: {
        width: '50%',
        textAlign: 'center',
    }
  });

function ReceptionDocPDF({ doc_id }) {
    const [receptionData, setReceptionData] = useState({
        id: 0,
        package_id: [],
        total_packages_received: 0,
        weight: 0,
        centra_id: [],
        receival_datetime: "",
        guard_harbor_name: "",
        xyz_name: "",
        description: "",
        package_data: []
    });

    useEffect(async () => {
        async function fetchReception() {
            const response = await searchReceptionPackages(new String(doc_id));
            if(response && response.data) {
                const data = response.data;

                console.log(data);
                
                let package_ids = [];
                if (typeof data.package_id === 'string') {
                    package_ids = data.package_id.split(",").map((e) => parseInt(e));
                } else if (Array.isArray(data.package_id)) {
                    package_ids = data.package_id.map((e) => parseInt(e));
                } else {
                    console.error('Package ID is not in the expected format:', data.package_id);
                }

                let weight = 0;
                const centra_id = new Set()
                const package_data = []
                for(let idx = 0; idx < package_ids.length; idx++){
                    
                    const packageResponse = await searchPackage(package_ids[idx])
                    if(packageResponse && packageResponse.data) {
                        
                        weight += packageResponse.data.weight
                        centra_id.add(packageResponse.data.centra_id)
                        package_data.push({id: packageResponse.data.id, weight: packageResponse.data.weight, centra_id: packageResponse.data.centra_id})
                    }
                }

                
                setReceptionData({
                    id: data.id,
                    package_id: package_ids,
                    total_packages_received: package_ids.length,
                    weight,
                    centra_id: Array.from(centra_id),
                    receival_datetime: new Date(data.receival_datetime).toLocaleDateString(),
                    guard_harbor_name: data.guard_harbor_name,
                    xyz_name: data.xyz_name,
                    description: data.description,
                    package_data
                })
                console.log(receptionData);
            }

            
        }
        await fetchReception()
        console.log(receptionData)
        // const mockData = {
        //     id: 1,
        //     package_id: [1, 2, 3],
        //     total_packages_received: 3,
        //     weight: 150,
        //     centra_id: [1, 2, 3],
        //     receival_datetime: "2024-06-17T12:00:00.000Z",
        //     guard_harbor_name: "John Doe",
        //     xyz_name: "Jane Smith",
        //     description: "Sample description",
        //     package_data: [
        //         { id: 1, weight: 50, centra_id: "C123" },
        //         { id: 2, weight: 50, centra_id: "C123" },
        //         { id: 3, weight: 50, centra_id: "C123" }
        //     ]
        // };
        // setReceptionData(mockData);
    }, []);

    // if (!receptionData) {
    //     // return <Text>Loading...</Text>;
    // }

    return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
            <Text style={styles.title}>Package Reception Document</Text>
        </View>
        
        <View style={styles.section}>
            <View style={styles.spaceBetween}>
                <Text style={styles.subtitle}>Reception Number: {receptionData.id}</Text>
                <Text style={styles.subtitle}>Date: {receptionData.receival_datetime} </Text>
            </View>
        </View>

        <View style={styles.hr} />

        <View style={styles.section}>
            <Text style={styles.subtitle}>Parties Involved: </Text>
            <Text style={styles.text}>First Party (Preparer): </Text>
            <Text style={styles.bulletpoint}>• Name: {receptionData.guard_harbor_name}</Text>
            <Text style={styles.bulletpoint}>• Position: Guard Harbor</Text>
            <Text style={styles.text}>Second Party (Receiver): </Text>
            <Text style={styles.bulletpoint}>• Name: {receptionData.xyz_name}</Text>
            <Text style={styles.bulletpoint}>• Position: XYZ Employee</Text>
        </View>

        <View style={styles.hr} />

        <View style={styles.section}>
          <Text style={styles.subtitle}>Handover Details:</Text>
          <Text style={styles.bulletpoint}>• Package IDs: {receptionData.package_id.join(', ')}</Text>
          <Text style={styles.bulletpoint}>• Total Packages Received: {receptionData.total_packages_received}</Text>
          <Text style={styles.bulletpoint}>• Total Weight: {receptionData.weight}</Text>
          <Text style={styles.bulletpoint}>• Centra Unit Sender: {receptionData.centra_id.join(', ')}</Text>
          <Text style={styles.bulletpoint}>• Description: {receptionData.description}</Text>
        </View>

        <View style={styles.hr} />

        <View style={styles.section}>
          <Text style={styles.subtitle}>Package Data</Text>
          
            <View style={{ width:'100%', flexDirection :'row', marginTop:10, key:0}}>
                <View style={styles.theader}>
                    <Text>Package ID</Text>   
                </View>
                <View style={styles.theader}>
                    <Text>Weight</Text>   
                </View>
                <View style={styles.theader}>
                    <Text>Centra</Text>   
                </View>
            </View>
            {receptionData.package_data.map((pkg, index) => (
                <View style={{ width:'100%', flexDirection :'row'}} key={index}>
                    <View style={styles.tbody}>
                        <Text >{pkg.id}</Text>   
                    </View>
                    <View style={styles.tbody}>
                        <Text>{pkg.weight} </Text>   
                    </View>
                    <View style={styles.tbody}>
                        <Text>{pkg.centra_id}</Text>   
                    </View>
                </View>
            ))}
        </View>
        
        <View style={styles.hr} />

        <View style={styles.section}>
          <Text style={styles.subtitle}>Confirmation:</Text>
          <Text style={styles.text}>We, the undersigned, hereby confirm the handover of the aforementioned goods. 
          The goods are in good and sufficient condition. Responsibility for these goods 
          is now transferred to the second party for proper maintenance and use.</Text>
        </View>

        <View style={styles.signBox}>
            <Text style={styles.signText}>The Receiver</Text>
            <Text style={styles.signText}>The Preparer</Text>
        </View>
      </Page>
    </Document>
    );
}

export default ReceptionDocPDF;
