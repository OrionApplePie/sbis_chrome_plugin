function mergeArray(oldArr, newArr) {
  // сравнивает два массива поэлементно и, если в newArr
  // j-й элемент не является &x9617, то
  // он записывается на j-е место в oldArr
  if(oldArr == undefined){
    return newArr;
  } else {
      for(j=0;j<newArr.length;j++){
        if(newArr[j] != String.fromCharCode(9617)){
          oldArr[j] = newArr[j];
        }
    }
    return oldArr;
  }
}

// при обновлении срабатывает
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
  // если страница прогрузилась до конца
  if (changeInfo.status == "complete") {
    // если это нужный урл
    if (tab.url.indexOf("https://sbis.ru/contragents/") > -1){
        // берется url
        var url = tab.url;
        // для захвата урла с id фирмы
        var reg = /https:\/\/(sbis\.ru\/contragents\/\d+)/
        var baseUrl = reg.exec(url);
        var resRevenue;
        var resProfit;
        var resCost;
        var xhr = new XMLHttpRequest();
        var count = 0;

        do {
          // в цикле посылаются запросы до тех пор пока не откроются все 3 числа
          xhr.open("GET", "https://" + baseUrl[1] + "/" + count.toString(), false);
          xhr.send();
            if ( xhr.status != 200 ) {
                //выйти из цикла и оставить все как есть
            } else {
                var html = xhr.responseText;
                var revenue = $(html).find(".cCard__Contacts-Revenue-Desktop").find(".cCard__BlockMaskSum").text();
                var profit = $(html).find(".cCard__Owners-Profit-Desktop").find(".cCard__BlockMaskSum").text();
                var cost = $(html).find(".cCard__Reliability-Cost-Desktop").find(".cCard__BlockMaskSum").text();

                revenueArr = Array.from(revenue);
                profitArr = Array.from(profit);
                costArr = Array.from(cost);

                resRevenue = mergeArray(resRevenue, revenueArr);
                resProfit = mergeArray(resProfit, profitArr);
                resCost = mergeArray(resCost, costArr);

                count++;
              }
            } while(resRevenue.indexOf(String.fromCharCode(9617)) != -1 || resProfit.indexOf(String.fromCharCode(9617)) != -1 || resCost.indexOf(String.fromCharCode(9617)) != -1);

            var msg = {
              greeting: "hello",
              revenue: resRevenue.join(''),
              profit: resProfit.join(''),
              cost: resCost.join('')
            }
            // отсылка данных контент скрипту
            chrome.tabs.sendMessage(tab.id, msg, function(response) {
               console.log(response.farewell);
             });
        }
    }
});
