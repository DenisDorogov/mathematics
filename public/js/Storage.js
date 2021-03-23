class Storage {
    resetData;
    data;

    constructor() {
        console.log('Storage');
        if (this.checkStorage()) {
            this.data = this.getStorage;
        } else {
            this.data = STORAGE_DEFAULT;
            this.setStorage(this.data);
        }
    }

    setStorage(object) {
        let jsonObject = JSON.stringify(object);
        localStorage.setItem('worldofmathematics', jsonObject);
    }

    getStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    checkStorage() {
        if (localStorage.name == 'worldofmathematics') return true;
    }
}