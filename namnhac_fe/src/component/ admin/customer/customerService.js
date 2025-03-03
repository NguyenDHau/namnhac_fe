export const CustomerService = {
    getCustomersMedium() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1000,
                        name: 'James Butt',
                        country: { name: 'Algeria', code: 'dz' },
                        company: 'Benton, John B Jr',
                        date: '2015-09-13',
                        status: 'unqualified',
                        verified: true,
                        activity: 17,
                        representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
                        balance: 70663
                    },
                    {
                        id: 1001,
                        name: 'Josephine Darakjy',
                        country: { name: 'Egypt', code: 'eg' },
                        company: 'Chanay, Jeffrey A Esq',
                        date: '2019-02-09',
                        status: 'proposal',
                        verified: false,
                        activity: 31,
                        representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
                        balance: 82429
                    }
                ]);
            }, 1000); // Giả lập độ trễ API 1 giây
        });
    }
};
