loadGifUrl = chrome.runtime.getURL("load.gif");

// замена стиля на свой, чтобы скрипт сайта не лез менять поля с числами
uncoverHtml = "<span class='uncover'><img src=" + loadGifUrl + " width='14' height='14'> </span>";

// вставка анимации загрузки
$("html").find(".cCard__Contacts-Revenue-Desktop").
          find(".cCard__BlockMaskSum").
          replaceWith(uncoverHtml);

$("html").find(".cCard__Owners-Profit-Desktop").
          find(".cCard__BlockMaskSum").
          replaceWith(uncoverHtml);

$("html").find(".cCard__Reliability-Cost-Desktop").
          find(".cCard__BlockMaskSum").
          replaceWith(uncoverHtml);


chrome.runtime.onMessage.addListener(
  function(request, sender) {
    // замена значений на странице
    var revenue = $("html").find(".cCard__Contacts-Revenue-Desktop").
                            find(".uncover");

    $(revenue).css("color", "#000");
    $(revenue).html(request.revenue);

    var profit = $("html").find(".cCard__Owners-Profit-Desktop").
                           find(".uncover");

    $(profit).css("color", "#000");
    $(profit).html(request.profit);

    var cost = $("html").find(".cCard__Reliability-Cost-Desktop").
                         find(".uncover");

    $(cost).css("color", "#000");
    $(cost).html(request.cost);
    //
    $("html").find(".cCard__EconomyResult-Mobile-Revenue").
              find(".cCard__BlockMaskSum").text(request.revenue);

    $("html").find(".cCard__EconomyResult-Mobile-Profit").
              find(".cCard__BlockMaskSum").text(request.profit);

    $("html").find(".cCard__EconomyResult-Mobile-Cost").
              find(".cCard__BlockMaskSum").text(request.cost);
  });
