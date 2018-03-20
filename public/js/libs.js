void function (){
    window.queryString = {
        format:function(search){
            console.log(search)
            if(search){
                return _format(search)
            }else if(location.search){
                return _format(location.search.slice(1,location.search.length))
            }
        },
        url:function(obj){
            var str = ""
            if(!obj){
                return str
            }            
            var oArr = Object.keys(obj)
            oArr.map(item=>{
                str+= item+"="+(obj[item]?obj[item]:"")
            })
            return str
        }
    }
    function _format(uri){
        console.log(uri)
        if(!uri){
            return {}
        }
        var uriArr = uri.split("&")
        var obj = {}
        uriArr.map(item=>{
            var a = item.split("=")
            obj[a[0]]=a[1]
        })
        return obj
    }
}();
