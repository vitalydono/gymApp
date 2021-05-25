

 export default {
    // insert item to database
    insert:function (table,employeeInfoInsert){

        //add id to the employeeInfoInsert
        employeeInfoInsert.id = new Date().getTime();
        var arr =this.select(table);

        arr.push(employeeInfoInsert)
        localStorage.setItem(table , JSON.stringify(arr));
    },
    select:function (table) {
        // select items from database
        var result = localStorage.getItem(table);
        if (result == null) {
            result = "[]";
        }
        return JSON.parse(result);
    },
    removeEmployee: function (table,id){
        // select the relevant item from arr
        var arr = this.select(table);
        var foundIndex = this._searchIndexById(table,id);
        if ( foundIndex == undefined ){
            return
        }

        // remove the item from arr
        arr.splice(foundIndex , 1);

        //update the arr to localstorage
        localStorage.setItem(table , JSON.stringify(arr));
    },
    updateEmployee:function (table,id,item){

        // select the relevant item from arr
        var arr =this.select(table);
        var foundIndex = this._searchIndexById(table,id);
        if (foundIndex == undefined ){
            return;
        }
        for (var key in item ){
            if(item[key]){
                arr[foundIndex][key] = item[key];
            }
        }


        //update the arr in localstorage
        localStorage.setItem(table , JSON.stringify(arr));

    },

    getItemById: function(table,id){
        var arr = this.select(table);
        return arr.find(function (item){
            return item.id == id
        })

    },
    _searchIndexById:function (table,id){
        // select the relevant item from arr
        var arr =this.select(table);
        var foundIndex = undefined;


        for (var i = 0; i < arr.length; i++){
            var item = arr[i];
            if (item.id == id ){
                foundIndex = i;
                break;
            }

        }
        return foundIndex;
    }
}







