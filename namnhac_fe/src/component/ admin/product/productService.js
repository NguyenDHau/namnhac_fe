export const ProductService = {
    getProductMedium() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1000,
                        name: 'Ống nhựa Bình Minh',
                        productCode: 'BM01',
                        brand: 'Bình Minh',
                        country: { name: '0906446132', code: 'dz' },
                        size: '90',
                        importPrice: 300000, //Giá nhập
                        retailPrice: 320000, //Giá lẻ
                        wholesalePrice: 315000, //Giá sỉ
                        stockQuantity: 30,
                        status: 'còn hàng',
                    }, 
                    {
                        id: 1001,
                        name: 'Ống nhựa Hoa Sen',
                        productCode: 'HS02',
                        brand: 'Hoa Sen',
                        country: { name: '0702562229', code: 'eg' },
                        size: '114',
                        importPrice: 300000, //Giá nhập
                        retailPrice: 320000, //Giá lẻ
                        wholesalePrice: 315000, //Giá sỉ
                        stockQuantity: 20,
                        status: 'còn hàng',
                    }
                ]);
            }, 1000); // Giả lập độ trễ API 1 giây
        });
    }
};
