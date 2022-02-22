class SearchBox {
    constructor() {
        this.media = window.matchMedia('(min-width: 768px)')
        this.searchBox = document.getElementsByName('search')
        this.events()
    }
    events() {
        this.media.addListener(() => {
            this.myfunction(this.media);
            console.log('Event listener')
        })
    }

    myfunction(e) {
        if (e.matches) {
            this.searchBox[0].placeholder = 'Search for name or expertise'
            console.log('Changed');
        } else {
            this.searchBox[0].placeholder = 'concept and design concept...'
            console.log('Mobile Screen');
        }
    }


}

export default SearchBox;