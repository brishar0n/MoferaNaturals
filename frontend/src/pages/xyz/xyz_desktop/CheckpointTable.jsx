import DataTable,{ createTheme } from 'react-data-table-component';
import React,{useState, useEffect } from 'react';

// A super simple expandable component.
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const columns = [
	{
		name: 'Checkpoint ID',
		selector: row => row.id,
        sortable: true,
        //width: "200px"   
	},
	{
		name: 'From Shipping',
		selector: row => row.shipping_id,
        sortable: true,
        //width: "150px"   
	},
    {
		name: 'Quantity',
		selector: row => row.total_packages,
        sortable: true,
	},
    {
		name: 'Arrival Date',
		selector: row => new Date(row.arrival_datetime).toLocaleDateString(),
        sortable: true,
        //width: "150px"   
	},
  //   {
	// 	name: 'Package ID',
	// 	selector: row => row.pid,
  //       sortable: true,
  //       //width: "150px"   
	// },
  //   {
	// 	name: 'Packages Sent',
	// 	selector: row => row.psent,
  //       sortable: true,
  //       //width: "150px"   
	// },{
	// 	name: 'Packages Status',
	// 	selector: row => row.pstatus,
  //       sortable: true,
  //       //width: "150px"   
	// },
];

createTheme('solarized', {
    text: {
      primary: '#016B45',
      secondary: '#2aa198',
    },
    background: {
      default: '#E6F1ED',
    },
    context: {
      background: '#E6F1ED',
      text: '#016B45',
    },
    divider: {
      default: '#016B45',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');
  
function CheckPointTable({ data, filter }) {
  // const data = [
  //   {
  //   id: "CPTID#12340",
  //   form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //   date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Pending",
  // },
  // {
  //   id: "CPTID#12341",
  //   form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //   date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Pending",
  // },
  //   {
  //   id: "CPTID#12342",
  //   form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //   date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Pending",
  // },
  //   {
  //   id: "CPTID#12343",
  //   form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //   date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Pending",
  // },
  //   {
  //   id: "CPTID#12344",
  //   form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //       date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Arrived at Guard Harbour",
  // },
  // {
  //       id: "CPTID#12345",
  //       form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //       date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Arrived at Guard Harbour",
  // },
  // {
  //   id: "CPTID#12346",
  //       form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //       date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Pending",
  // },
  // {
  //       id: "CPTID#12347",
  //       form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //       date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Pending",
  // },
  // {
  //       id: "CPTID#12348",
  //       form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //       date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Pending",
  // },
  // {
  //       id: "CPTID#12349",
  //       form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //       date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Pending",
  // },
  // {
  //       id: "CPTID#12350",
  //       form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //       date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Pending",
  // },
  // {
  //       id: "CPTID#12352",
  //       form: 'Centra Unit 1',
  //       quantity:'5 packages',
  //       date: '31 Aug 2023',
  //       pid:"PKG#349320",
  //       psent:"5 packages",
  //       pstatus:"Pending",
  // },
  // ]
  const [filteredData, setFilteredData] = useState(data);
    // useEffect(() => {
    //   if (filter === 'all') {
    //     setFilteredData(data);
    //   } else {
    //     setFilteredData(data.filter(item => item.pstatus === filter));
    //   }
    // }, [filter]);
    console.log(data)
	return (
		<DataTable
			columns={columns}
			data={data}
			//expandableRows
			//expandableRowsComponent={ExpandedComponent}
            pagination
            //theme="solarized"
            fixedHeader
            fixedHeaderScrollHeight="300px"
		/>
	);
};


//export default {
//	title: 'Examples/Filtering',
//	component: Filtering,
//};
export default CheckPointTable;
//export default Filtering;