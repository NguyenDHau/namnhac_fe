
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './customerService';
import SidebarMenu from "../sidebar/sidebar";
import CustomerMenu from './customerMenu';
import './customer.css';
import { Dialog } from 'primereact/dialog';
import { Editor } from "primereact/editor"

export default function Customer() {
    const [customers, setCustomers] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [text, setText] = useState('');

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    const showDetails = (customer) => {
        setSelectedCustomer(customer);
        setVisible(true);
    };

    const actionTemplate = (rowData) => {
        return (
            <Button label="Show" icon="pi pi-external-link" onClick={() => showDetails(rowData)} />
        );
    };


    return (
        <div className="admin-layout d-flex">
            {/* Sidebar */}
            <SidebarMenu />
            <CustomerMenu />

            <div className="card">
                <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}">

                    <Column field="name" header="Họ và tên" style={{ width: '20%' }}></Column>
                    <Column field="country.name" header="Số điện thoại" style={{ width: '20%' }}></Column>
                    <Column field="company" header="Tổng hoá đơn" style={{ width: '20%' }}></Column>
                    <Column field="representative.name" header="Tổng tiền" style={{ width: '20%' }}></Column>
                    <Column body={actionTemplate} header="" style={{ width: '20%' }}></Column>
                </DataTable>
            </div>

            {/* Dialog hiển thị thông tin chi tiết */}
            <Dialog header="Chi tiết" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                {selectedCustomer && (
                    <div>
                        <p><strong>Họ và tên:</strong> {selectedCustomer.name}</p>
                        <p><strong>Số điện thoại:</strong> {selectedCustomer.country.name}</p>
                        <p><strong>Số hoá đơn chưa thanh toán:</strong> {selectedCustomer.company}</p>
                        <p><strong>Tổng tiền nợ:</strong> {selectedCustomer.representative.name}</p>
                        <p><strong>Ghi chú: </strong></p>
                    </div>

                )}
                <div className="card">
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
                    <Button label="Submit" />
                </div>
            </Dialog>
        </div>
    );
}
