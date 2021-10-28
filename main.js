$(document).ready(() => {


    const $contactcontent = $('.forcontact');
    const $formcontent = $('.formcontainer');
    $formcontent.hide();
    $contactcontent.hide();
    const $contactcontentbutton = $('.contactbutton');
    const $signbutton = $('.signbutton')

    $($signbutton).on('click', () => {
        $formcontent.toggle();
    });


    $($contactcontentbutton).on('click', () => {
        $contactcontent.toggle();
    });


    const $content = $('.jumbo1');
    $($content).mouseover(function() {

        $content.css("background", "Grey");

    });
    $($content).mouseout(function() {

        $content.css("background", "White");

    });

    const $content1 = $('.jumbo2');
    $($content1).mouseover(function() {

        $content1.css("background", "Grey");

    });
    $($content1).mouseout(function() {

        $content1.css("background", "White");

    });

    const $content3 = $('.jumbo3');
    $($content3).mouseover(function() {

        $content3.css("background", "Grey");

    });
    $($content3).mouseout(function() {

        $content3.css("background", "White");

    });





});