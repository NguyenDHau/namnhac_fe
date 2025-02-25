
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './productService';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Editor } from "primereact/editor"
import SidebarMenu from "../sidebar/sidebar";
import ProductSidebar from "./productSidebar/productSidebar";

export default function ListProduct() {
    const [product, setProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        ProductService.getProductMedium().then((data) => setProduct(data));
    }, []);

    const showDetails = (product) => {
        setSelectedProduct(product);
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
            
            

            <div className="card">
            <ProductSidebar />
                <DataTable value={product} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Tên sản phẩm" style={{ width: '25%' }}></Column>
                    <Column field="productCode" header="Mã sản phẩm" style={{ width: '25%' }}></Column>
                    <Column field="brand" header="Thương hiệu" style={{ width: '25%' }}></Column>
                    <Column field="size" header="Kích thước" style={{ width: '25%' }}></Column>
                    <Column field="status" header="Tình trạng" style={{ width: '25%' }}></Column>
                    <Column body={actionTemplate} header="" style={{ width: '20%' }}></Column>
                </DataTable>

                <Dialog header="Chi tiết" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    {selectedProduct && (
                        <div>
                            <p><strong>Tên sản phẩm: </strong> {selectedProduct.name}</p>
                            <p><strong>Giá nhập: </strong> {selectedProduct.importPrice.toLocaleString('vi-VN')} VNĐ</p>
                            <p><strong>Giá bán lẻ: </strong> {selectedProduct.retailPrice.toLocaleString('vi-VN')} VNĐ</p>
                            <p><strong>Giá bán sỉ: </strong> {selectedProduct.wholesalePrice.toLocaleString('vi-VN')} VNĐ</p>

                            <p><strong>Số lượng tồn kho: </strong>{selectedProduct.stockQuantity}</p>
                        </div>

                    )}
                    <div className="card">
                        <Button label="Sửa" />
                        <Button label="Xoá" />
                    </div>
                </Dialog>
            </div>
        </div>

    );
}
