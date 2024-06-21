

let form = document.querySelector('#form'), 
        choice = form.querySelector('#choice'),
        keep = form.querySelector('#keep'),
        result = form.querySelector('#result'),
        
        key = 'colors=',
        reg = /colors=([^;]+)/,
        arr = [];
    
    const insert = (target, str) => {
        let html = '&nbsp;<span style="padding: 0px 10px; background-color: ' + str + ';"></span>';
        target.insertAdjacentHTML('beforeEnd', html);
        
    };


 
    const choiceColor = e => {
        let target = e.currentTarget;
        arr = [...arr, target.value];
        insert(choice, target.value);
    };
   
    
    (() => {
        if( !document.cookie.match(reg) ) return;
        let cook = JSON.parse(document.cookie.match(reg)[1]);
        for(let color of cook) insert(keep, color);
        result.innerText = document.cookie;
    })();
   
    
    const saveCookie = e => {
        if(!arr.length) {
            alert('Цвета для сохранения не выбраны');
            return;
        }
        if( document.cookie.match(reg) ) {
            arr = [...JSON.parse(document.cookie.match(reg)[1]), ...arr];
        }
        document.cookie = key + JSON.stringify(arr);
        location.href = location.href;
    };







 







    const delCookie = e => {
        if( !document.cookie.match(reg) ) return;
        document.cookie = key;
        location.href = location.href;
    };


   