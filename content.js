loadGifUrl = chrome.runtime.getURL("load.gif");
// вставка анимации загрузки
$("html").find(".cCard__Contacts-Revenue-Desktop").
          find(".cCard__BlockMaskSum").
          html($('<img>', {
                           width: 14,
                           height: 14,
                           src: loadGifUrl
}));

$("html").find(".cCard__Owners-Profit-Desktop").
          find(".cCard__BlockMaskSum").
          html($('<img>', {
                           width: 14,
                           height: 14,
                           src: loadGifUrl
}));

$("html").find(".cCard__Reliability-Cost-Desktop").
          find(".cCard__BlockMaskSum").
          html($('<img>', {
                           width: 14,
                           height: 14,
                           src: loadGifUrl
}));


chrome.runtime.onMessage.addListener(
  function(request, sender) {
    // замена значений на странице
    var revenue = $("html").find(".cCard__Contacts-Revenue-Desktop").
                            find(".cCard__BlockMaskSum");

    $(revenue).css("color", "#000");
    $(revenue).html(request.revenue);

    var profit = $("html").find(".cCard__Owners-Profit-Desktop").
                           find(".cCard__BlockMaskSum");

    $(profit).css("color", "#000");
    $(profit).html(request.profit);

    var cost = $("html").find(".cCard__Reliability-Cost-Desktop").
                         find(".cCard__BlockMaskSum");

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
