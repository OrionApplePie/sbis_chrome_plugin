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
    $("html").find(".cCard__Contacts-Revenue-Desktop").
              find(".cCard__BlockMaskSum").html(request.revenue);

    $("html").find(".cCard__Owners-Profit-Desktop").
              find(".cCard__BlockMaskSum").text(request.profit);

    $("html").find(".cCard__Reliability-Cost-Desktop").
              find(".cCard__BlockMaskSum").text(request.cost);

    $("html").find(".cCard__EconomyResult-Mobile-Revenue").
              find(".cCard__BlockMaskSum").text(request.revenue);

    $("html").find(".cCard__EconomyResult-Mobile-Profit").
              find(".cCard__BlockMaskSum").text(request.profit);

    $("html").find(".cCard__EconomyResult-Mobile-Cost").
              find(".cCard__BlockMaskSum").text(request.cost);

  });
