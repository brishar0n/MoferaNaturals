import { PDFDownloadLink } from "@react-pdf/renderer";
import ReceptionDocPDF from "./ReceptionDocPDF";

function PDFDownload() {
    return (
        <button className="px-7 py-3 bg-secondary text-white rounded-full font-semibold mt-5">
            <PDFDownloadLink document={<ReceptionDocPDF />} fileName={`Reception Documentation #{reception.id}`}>
                {({ loading }) =>
                    loading ? (
                        <button>loading document....</button>
                    ) : (
                        <button>Download</button>
                    )}
            </PDFDownloadLink>
        </button>
    )
}

export default PDFDownload;