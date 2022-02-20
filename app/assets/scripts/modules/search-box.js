class SearchBox {
    constructor() {
        this.media = window.matchMedia('(min-width: 768px)')
        this.searchBox = document.getElementsByName('Search')
            // console.log(this.searchBox[0].placeholder);
        this.events()
    }
    events() {
        this.media.addListener(() => {
            this.myfunction(this.media)
        })
    }

    myfunction(e) {
        if (e.matches) {
            this.searchBox[0].placeholder = 'Search for name or expertise'
        } else {
            this.searchBox[0].placeholder = 'concept and design concept...'
        }
    }


}

export default SearchBox;