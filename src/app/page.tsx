import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from '@/components/ui/Table'

import { fetchWorkers } from './actions'

// const workers = [
//   {
//     NAME: "Asdrubal Ribeiro da Silva António",
//     PHONE: "+351 931 822 166",
//     EMAIL: "asdrubal@antonio.com",
//     DEPARTMENT: "Office",
//   },
//   {
//     NAME: "Estoijo Armando Teles Morais",
//     PHONE: "+351 914 827 142",
//     EMAIL: "estoijo@morais.com",
//     DEPARTMENT: 'School',
//   },
//   {
//     NAME: "Judesclauda Luísa Pagaime Costa",
//     PHONE: "+351 923 927 122",
//     EMAIL: "judesclauda@costa.com",
//     DEPARTMENT: 'School',
//   },
//   {
//     NAME: "Jamilson Artur Silvestre Antunes",
//     PHONE: "+351 935 627 982",
//     EMAIL: "jamilson@antunes.com",
//     DEPARTMENT: "Office",
//   },
//   {
//     NAME: "João Paulo Dias Fernandes",
//     PHONE: "+351 914 227 060",
//     EMAIL: "joão@fernandes.com",
//     DEPARTMENT: "Office",
//   },
//   {
//     NAME: "Jacinto Leite Aquino Rego",
//     PHONE: "+351 916 677 002",
//     EMAIL: "jacinto@rego.com",
//     DEPARTMENT: "School",
//   },
//   {
//     NAME: "Deide Costa Envagelista Fagundes",
//     PHONE: "+351 924 457 952",
//     EMAIL: "deide@fagundes.com",
//     DEPARTMENT: "Office",
//   },
// ]

export default async function Home() {
  const workers = await fetchWorkers();

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
            <TableHead className="text-right">Department</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workers.map((worker) => (
            <TableRow key={worker.NAME}>
              <TableCell className="font-medium truncate">{worker.NAME.slice(0, 40)}</TableCell>
              <TableCell>{worker.PHONE.slice(0, 12)}</TableCell>
              <TableCell>{worker.EMAIL.slice(0, 60)}</TableCell>
              <TableCell className="text-right">{worker.DEPARTMENT.slice(0, 15)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total workers</TableCell>
            <TableCell className="text-right">{workers.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  )
}
