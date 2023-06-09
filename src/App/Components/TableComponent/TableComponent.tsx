import React, {useEffect, useState} from 'react';
import {
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    TextField,
    Table,
} from "@material-ui/core";
import {Client} from "../../Utils/Entities/Clients";
import ButtonComponent, {colorType} from "../Button/Button";
import {TableComponentStyled} from "./TableComponentStyled";

export type tableType = 'client';

interface TableProps {
    onclick: (e:string) => void;
    clients: Client[];
    text: string;
    color: colorType;
    title: string
    tableType: tableType;
}

const TableComponent: React.FC<TableProps> = ({
                                                  onclick,
                                                  clients,
                                                  text,
                                                  color,
                                                  tableType,
                                                  title,
                                              }) => {
    const [tableData, setTableData] = useState<Client[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState('');


    const filteredData = tableData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        setTableData(clients);
    }, [clients]);

    return (
        <TableComponentStyled>
            <div className="content-table">
                <h1>{title}</h1>
                <div className="content-search">
                    <TextField
                        label="Buscar clientes"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <ButtonComponent onClick={()=>onclick(title)} text={text} color={color}/>
                </div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Nit</TableCell>
                                <TableCell>Dirección</TableCell>
                                <TableCell>Departamento</TableCell>
                                <TableCell>Ciudad</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.cc_nit}</TableCell>
                                        <TableCell>{row.address}</TableCell>
                                        <TableCell>{row.department}</TableCell>
                                        <TableCell>{row.city}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    component="div"
                    count={filteredData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </TableComponentStyled>
    );
}
export default TableComponent;