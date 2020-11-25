class Temperature {
    constructor(cel) {
        this.celsius = cel;
    }

    convertCtoF(){
        /*if(this.checkLimitCelsius()){
            let f = this.celsius * 1.8 + 32;
            console.log(f);
        }else {
            console.log('Nhiet do khong dung');
        }*/

        return this.checkLimitCelsius()?(this.celsius*1.8+32):"Nhiet do khong dung";
    }

    convertCtoK(){
        if(this.checkLimitCelsius()){
            let k = this.celsius + 273.15;
            return k;
        }else {
            return "Nhiet do khong dung";
        }
    }

    checkLimitCelsius(){
        // if(this.celsius < -273){
        //     return false;
        // }else {
        //     return true;
        // }

        // return (this.celsius < -273) ? false : true;

        return (this.celsius > -273);
    }
}
