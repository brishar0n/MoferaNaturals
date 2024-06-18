import { fontWeight } from '@mui/system';
import DataTable,{ createTheme } from 'react-data-table-component';

// A super simple expandable component.
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const columns = [
	{
		name: 'Centra',
		selector: row => "Centra Unit "+row.centra_id,
        sortable: true,
        width: "200px"   
	},
	{
		name: 'Dry Leaves ID',
		selector: row => "#"+row.id,
        sortable: true,
        width: "150px"   
	},
    {
		name: 'Weight',
		selector: row => row.weight+" kg",
        sortable: true,
	},
    {
		name: 'Date',
		selector: row => row.dried_date,
        sortable: true,
        width: "150px"   
	},
];

// const data = [
//   	{
// 		id: 1,
// 		title: 'Centra Unit 1',
//         WetLeavesID:'#123',
// 		Weight: '30 kg',
//         Date:"31 Aug 2023"
// 	},
// 	{
// 		id: 2,
// 		title: 'Centra Unit 2',
//         WetLeavesID:'#123',
// 		Weight: '30 kg',
//         Date:"31 Aug 2023"
// 	},
//     {
// 		id: 3,
// 		title: 'Centra Unit 3',
//         WetLeavesID:'#123',
// 		Weight: '30 kg',
//         Date:"31 Aug 2023"
// 	},
//     {
// 		id: 4,
// 		title: 'Centra Unit 4',
//         WetLeavesID:'#123',
// 		Weight: '30 kg',
//         Date:"31 Aug 2023"
// 	},
//     {
// 		id: 5,
// 		title: 'Centra Unit 5',
//         WetLeavesID:'#123',
// 		Weight: '30 kg',
//         Date:"31 Aug 2023"
// 	},
// ]
  
function Table({data}) {
  
	return (
		<DataTable
      // customStyles={tableHeaderStyle}
			columns={columns}
			data={data}
			// expandableRows
			//expandableRowsComponent={ExpandedComponent}
      pagination
      theme="solarized"
      fixedHeader
      fixedHeaderScrollHeight="300px"
      // style={tableStyle}
		/>
	);
};

export default Table;