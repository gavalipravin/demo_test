var ProductCatalogController = /** @class */ (function () {
    function ProductCatalogController($scope) {
        this.products = [
            {
                id: '01',
                name: 'Basamati Biryani Rice',
                type: 'Long-Grain',
                price: '499',
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1qimQoBr7uKDwhoE2YW4OvJgtL2Z0LObBw&s'
            },
            {
                id: '02',
                name: ' Sprite',
                type: 'Coldring',
                price: '85',
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAnnwihAEvO8avpuTzZyCcwdlgOINBD_Nyg&s'
            },
            {
                id: '02',
                name: ' Gemini Oil',
                type: 'Oil',
                price: '130',
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsGIjlFQazYHCURcyFHkRx3XAdhssO6IVvQ&s'
            },
        ];
        $scope['vm'] = this;
    }
    return ProductCatalogController;
}());

