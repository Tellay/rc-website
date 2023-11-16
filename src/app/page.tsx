import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from '@/components/ui/table'

// const workers = [
//   {
//     name: "Asdrubal Ribeiro da Silva António",
//     mobilePhone: "+351 931 822 166",
//     email: "asdrubal@antonio.com",
//     department: "Office",
//   },
//   {
//     name: "Estoijo Armando Teles Morais",
//     mobilePhone: "+351 914 827 142",
//     email: "estoijo@morais.com",
//     department: 'School',
//   },
//   {
//     name: "Judesclauda Luísa Pagaime Costa",
//     mobilePhone: "+351 923 927 122",
//     email: "judesclauda@costa.com",
//     department: 'School',
//   },
//   {
//     name: "Jamilson Artur Silvestre Antunes",
//     mobilePhone: "+351 935 627 982",
//     email: "jamilson@antunes.com",
//     department: "Office",
//   },
//   {
//     name: "João Paulo Dias Fernandes",
//     mobilePhone: "+351 914 227 060",
//     email: "joão@fernandes.com",
//     department: "Office",
//   },
//   {
//     name: "Jacinto Leite Aquino Rego",
//     mobilePhone: "+351 916 677 002",
//     email: "jacinto@rego.com",
//     department: "School",
//   },
//   {
//     name: "Deide Costa Envagelista Fagundes",
//     mobilePhone: "+351 924 457 952",
//     email: "deide@fagundes.com",
//     department: "Office",
//   },
// ]

import { fetchWorkers } from './actions'

export default async function Home() {
  const workers = fetchWorkers();

  console.log(workers);
  
  

  return (
    <main className='h-screen max-w-[1246px] flex flex-col items-center mx-auto px-4 py-12'>
      <h1 className='font-bold text-4xl w-full self-start'>Workers</h1>
      <Table className='mt-24'>
        <TableCaption>A list of workers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[356px]">Name</TableHead>
            <TableHead>Mobile Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Observations</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {workers.map((worker) => (
            <TableRow key={worker.name}>
              <TableCell className="font-medium truncate">{worker.name}</TableCell>
              <TableCell>{worker.mobilePhone}</TableCell>
              <TableCell>{worker.email}</TableCell>
              <TableCell className="text-right">{worker.department}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total workers</TableCell>
            {/* <TableCell className="text-right">{workers.length}</TableCell> */}
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  )
}
