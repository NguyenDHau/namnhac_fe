export const CustomerService = {
    getCustomersMedium() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1000,
                        name: 'Nguyễn Duy Hậu',
                        country: { name: '0906446132', code: 'dz' },
                        company: '6',
                        date: '2015-09-13',
                        status: 'unqualified',
                        verified: true,
                        activity: 17,
                        representative: { name: '30.000.000 VNĐ', image: 'ionibowcher.png' },
                        balance: 70663
                    },
                    {
                        id: 1001,
                        name: 'Hồ Đình Khuê',
                        country: { name: '0702562229', code: 'eg' },
                        company: '19',
                        date: '2019-02-09',
                        status: 'proposal',
                        verified: false,
                        activity: 31,
                        representative: { name: '65.000.000 VNĐ', image: 'amyelsner.png' },
                        balance: 82429
                    }
                ]);
            }, 1000); // Giả lập độ trễ API 1 giây
        });
    }
};
