import { PDFDownloadLink } from "@react-pdf/renderer";
import ReceptionDocPDF from "./ReceptionDocPDF";
import { useParams } from "react-router-dom";

function PDFDownload() {
    const {doc_id} = useParams()
    return (
        <button className="px-7 py-3 bg-secondary text-white rounded-full font-semibold mt-5">
            <PDFDownloadLink document={<ReceptionDocPDF doc_id={doc_id}/>} fileName={`Reception Documentation #.pdf`}>
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