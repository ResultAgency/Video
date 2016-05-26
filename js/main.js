/*Minify Mask*/function getPasteEvent(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var pasteEventName=getPasteEvent()+".mask",ua=navigator.userAgent,iPhone=/iphone/i.test(ua),android=/android/i.test(ua),caretTimeoutId;$.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},$.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(e,t){var n,a,r,i,o,c;return!e&&this.length>0?(n=$(this[0]),n.data($.mask.dataName)()):(t=$.extend({placeholder:$.mask.placeholder,completed:null},t),a=$.mask.definitions,r=[],i=c=e.length,o=null,$.each(e.split(""),function(e,t){"?"==t?(c--,i=e):a[t]?(r.push(new RegExp(a[t])),null===o&&(o=r.length-1)):r.push(null)}),this.trigger("unmask").each(function(){function n(e){for(;++e<c&&!r[e];);return e}function l(e){for(;--e>=0&&!r[e];);return e}function s(e,a){var i,l;if(!(0>e)){for(i=e,l=n(a);c>i;i++)if(r[i]){if(!(c>l&&r[i].test(g[l])))break;g[i]=g[l],g[l]=t.placeholder,l=n(l)}m(),v.caret(Math.max(o,e))}}function u(e){var a,i,o,l;for(a=e,i=t.placeholder;c>a;a++)if(r[a]){if(o=n(a),l=g[a],g[a]=i,!(c>o&&r[o].test(l)))break;i=l}}function d(e){var t,a,r,i=e.which;8===i||46===i||iPhone&&127===i?(t=v.caret(),a=t.begin,r=t.end,r-a===0&&(a=46!==i?l(a):r=n(a-1),r=46===i?n(r):r),h(a,r),s(a,r-1),e.preventDefault()):27==i&&(v.val(k),v.caret(0,p()),e.preventDefault())}function f(e){var a,i,o,l=e.which,d=v.caret();e.ctrlKey||e.altKey||e.metaKey||32>l||l&&(d.end-d.begin!==0&&(h(d.begin,d.end),s(d.begin,d.end-1)),a=n(d.begin-1),c>a&&(i=String.fromCharCode(l),r[a].test(i)&&(u(a),g[a]=i,m(),o=n(a),android?setTimeout($.proxy($.fn.caret,v,o),0):v.caret(o),t.completed&&o>=c&&t.completed.call(v))),e.preventDefault())}function h(e,n){var a;for(a=e;n>a&&c>a;a++)r[a]&&(g[a]=t.placeholder)}function m(){v.val(g.join(""))}function p(e){var n,a,l=v.val(),s=-1;for(n=0,pos=0;c>n;n++)if(r[n]){for(g[n]=t.placeholder;pos++<l.length;)if(a=l.charAt(pos-1),r[n].test(a)){g[n]=a,s=n;break}if(pos>l.length)break}else g[n]===l.charAt(pos)&&n!==i&&(pos++,s=n);return e?m():i>s+1?(v.val(""),h(0,c)):(m(),v.val(v.val().substring(0,s+1))),i?n:o}var v=$(this),g=$.map(e.split(""),function(e){return"?"!=e?a[e]?t.placeholder:e:void 0}),k=v.val();v.data($.mask.dataName,function(){return $.map(g,function(e,n){return r[n]&&e!=t.placeholder?e:null}).join("")}),v.attr("readonly")||v.one("unmask",function(){v.unbind(".mask").removeData($.mask.dataName)}).bind("focus.mask",function(){clearTimeout(caretTimeoutId);var t;k=v.val(),t=p(),caretTimeoutId=setTimeout(function(){m(),t==e.length?v.caret(0,t):v.caret(t)},10)}).bind("blur.mask",function(){p(),v.val()!=k&&v.change()}).bind("keydown.mask",d).bind("keypress.mask",f).bind(pasteEventName,function(){setTimeout(function(){var e=p(!0);v.caret(e),t.completed&&e==v.val().length&&t.completed.call(v)},0)}),p()}))}});
/*Minify Cookies*/!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function t(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function r(n,o){var i=u.raw?n:t(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(t,c,s){if(arguments.length>1&&!e.isFunction(c)){if(s=e.extend({},u.defaults,s),"number"==typeof s.expires){var a=s.expires,d=s.expires=new Date;d.setMilliseconds(d.getMilliseconds()+864e5*a)}return document.cookie=[n(t),"=",i(c),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var f=t?void 0:{},p=document.cookie?document.cookie.split("; "):[],l=0,m=p.length;m>l;l++){var x=p[l].split("="),g=o(x.shift()),j=x.join("=");if(t===g){f=r(j,c);break}t||void 0===(j=r(j))||(f[g]=j)}return f};u.defaults={},e.removeCookie=function(n,o){return e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n)}});


$(document).ready(function() {
    
    
    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 1000);
    });
    
    var videoElement = $('#Video').find('iframe');
    $('#Video').on('show.bs.modal',function (e) {
        var video = $(e.relatedTarget).data('video');
        videoElement.attr('src','//www.dailymotion.com/embed/video/'+video+'?autoPlay=1');
    });

    $('#Video').on('hide.bs.modal',function (e) {
        videoElement.attr('src','');
    });

    $('.video-box').owlCarousel({
        items:2,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        dots: true,
        responsive:{
            0:{
                items:2,
                nav: false
            },
            600:{
                items:3,
                nav: true,
                navText: ['','']
            }
        }
    });

    // $('.panel-video-box').owlCarousel({
    //     items:2,
    //     merge:true,
    //     loop:true,
    //     margin:10,
    //     video:true,
    //     lazyLoad:true,
    //     center:true,
    //     dots: true,
    //     responsive:{
    //         0:{
    //             items:2
    //         },
    //         600:{
    //             items:2
    //         }
    //     }
    // });

    var ClientWidth=$(window).width();
    var placement="left";
    if (ClientWidth < 750) {
        placement = "bottom";
    }

    var forms = $('form.validate');

    $.each(forms, function (index,form) {
        form.site = false;
        form.product = false;
        form.datasend = '';
        form.inputs=$(form).find('input');
        $(form).on('submit', function () {
            try {
                var form = this;
                var errors = false;

                $(form).find('input[name="telephone"]').val(
                    $(form).find('#kay').val()+$(form).find('#phone').val()
                );
                this.inputs.filter(function (item,index) {
                    return index.getAttribute('type')=='text';
                }).each(function () {
                    if (validate(this,form)) {
                        this.classList.remove("err");
                    }
                    else {
                        this.classList.add("err");
                        errors = true;
                    }
                });
                if (!errors && this.site && this.product) {

                    $(form).find("button[type='submit']").tooltip({
                        title: "Заявка Отправлена",
                        trigger: "focus",
                        delay: {"show": 300, "hide": 100},
                        placement: "top"
                    }).tooltip('show');

                    this.inputs.each(function () {
                        form.datasend += this.getAttribute('name') + '=' + this.value + "&";
                    });
                    console.log(form.datasend);
                    $.ajax({
                        url: 'php/SendResult.php',
                        type: 'POST',
                        data: form.datasend,
                        success: function () {
                            form.datasend = '';

                        },
                        error: function () {
                        }
                    });
                    $(form).find('input[type="text"]').each(function () {
                        $(this).val('');
                    });
                }
            }
            catch (e){
                console.error(e);
            }
            return false;
        }).find('#phone').mask('(999) 999-99-99');
    });

    function validate(input,form){
        switch (input.getAttribute('name')){
            case 'email':{
                var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if(pattern.test(input.value)){
                    $(input).tooltip('destroy');
                    break;
                }
                else{
                    $(input).tooltip({
                        title:"E-mail Введен некоректно",
                        trigger:"focus",
                        delay: { "show": 300, "hide": 100 },
                        placement: placement

                    }).tooltip('show');

                    return false;
                }
            }
            case 'phone':{
                if(input.value.length>3){
                    $(input).tooltip('destroy');
                    break;
                }
                else{
                    $(input).tooltip({
                        title:"Введите Телефон",
                        trigger:"focus",
                        delay: { "show": 300, "hide": 100 },
                        placement: placement

                    }).tooltip('show');

                    return false;
                }
            }
            case 'name':{
                if(input.value.length>3){
                    $(input).tooltip('destroy');
                    break;
                }
                else{
                    $(input).tooltip({
                        title:"Введите Имя",
                        trigger:"focus",
                        delay: { "show": 300, "hide": 100 },
                        placement: placement

                    }).tooltip('show');

                    return false;
                }
            }
            case 'site':{
                form.site=true;
                break;
            }
            case 'product':{
                form.product=true;
                break;
            }
            default:{
                if(input.value.length<3){
                    return false;
                }
                return true;
            }
        }

        return true;
    }


    var ts;
    if ($.cookie('action')) {
        ts = new Date(parseInt($.cookie('action'),10));
    }
    else{
        var dat = new Date();
        ts = new Date(dat.getTime()+10800000);
        $.cookie('action',ts.getTime());
    }


    var labels = ['Дней', 'Часов', 'Минут', 'Секунд'],
        nextYear = ts,
        template = _.template($('#main-example-template').html()),
        currDate = '00:00:00:00:00',
        nextDate = '00:00:00:00:00',
        parser = /([0-9]{2})/gi,
        $example = $('.countdown-container');
    // Parse countdown string to an object
    function strfobj(str) {
        var parsed = str.match(parser),
            obj = {};
        labels.forEach(function(label, i) {
            obj[label] = parsed[i]
        });
        return obj;
    }
    // Return the time components that diffs
    function diff(obj1, obj2) {
        var diff = [];
        labels.forEach(function(key) {
            if (obj1[key] !== obj2[key]) {
                diff.push(key);
            }
        });
        return diff;
    }
    // Build the layout
    var initData = strfobj(currDate);
    labels.forEach(function(label, i) {
        $example.append(template({
            curr: initData[label],
            next: initData[label],
            label: label
        }));
    });
    // Starts the countdown
    $example.countdown(nextYear, function(event) {
        var newDate = event.strftime('%d:%H:%M:%S'),
            data;
        if (newDate !== nextDate) {
            currDate = nextDate;
            nextDate = newDate;
            // Setup the data
            data = {
                'curr': strfobj(currDate),
                'next': strfobj(nextDate)
            };
            // Apply the new values to each node that changed
            diff(data.curr, data.next).forEach(function(label) {
                var selector = '.%s'.replace(/%s/, label),
                    $node = $example.find(selector);
                // Update the node
                $node.removeClass('flip');
                $node.find('.curr').text(data.curr[label]);
                $node.find('.next').text(data.next[label]);
                // Wait for a repaint to then flip
                _.delay(function($node) {
                    $node.addClass('flip');
                }, 50, $node);
            });
        }
    });

    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            ScrollUp();
        }
        else {
            ScrollDown();
        }
    });

    $('#about').on('show.bs.modal',function (e) {
        var tab = $(e.relatedTarget).data('tab');
        $("[aria-controls=" + tab + "]").click();
    });
});

function pacet(e){
    $('#pacet-name').text(e);
    $("#pacet input[name='product']").val("Пакет: " + e);
}

var zakaz = function () {
    $('#pacet-name').text($('.tab-pane.active').attr('id'));
    $("#pacet input[name='product']").val("Пакет: " + $('.tab-pane.active').attr('id'));
    $('#about').modal('hide');
};

var container = $('nav').find('.container');

var ScrollDown = function () {
    container.addClass('fadeOutUp').removeClass('fadeInDown');
};
var ScrollUp = function () {
    container.addClass('fadeInDown').removeClass('fadeOutUp');
};
