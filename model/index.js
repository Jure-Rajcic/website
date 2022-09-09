class Model {
    data = undefined

    constructor() {
        console.log('inside model constructor');
        if (localStorage.getItem('index') == null) {
            localStorage.setItem('index', 1);
        }
    }

    async setdata() {
        console.log('1');
        await fetch("./../../database/sources.json")
            .then((res) => res.json()).then((res) => this.data = res);
        console.log('2');
    }

    setIndex(arrow) {
        var index = parseInt(localStorage.getItem('index'));
        var indexChanged = false;
        switch (arrow.id) {
            case "left_arrow":
                if (index > 0) { index--; indexChanged = true; }
                break;
            case "right_arrow":
                if (index < this.data.length - 1) { index++; indexChanged = true; }
                break;
        }

        localStorage.setItem('index', index);
        return indexChanged;
    }

    getIndex() {
        return parseInt(localStorage.getItem('index'));
    }

    getData(index) {
        return this.data[index];
    }
}