
function calreal() {

    var total = parseInt(document.getElementById('total').value)
    var consum = parseInt(document.querySelector('#consum').value);
    var surgery = parseInt(document.querySelector('#surgery').value);
    var maintain = parseInt(document.querySelector('#maintain').value);
    var therapy = parseInt(document.querySelector('#therapy').value);
    var staff = parseInt(document.querySelector('#staff').value);
    var refund = parseInt(document.querySelector('#refund').value);
    var inventory = parseInt(document.querySelector('#inventory').value);
    var people = parseInt(document.querySelector('#people').value);
    var result = document.querySelector('#result');

    const cal = total + consum - surgery - maintain - therapy - staff - refund - inventory;

    if (cal >= 6500000) {
        result.innerHTML = 
        `<div class="rbox">
        <span>扣除後營業額</span>
        <span>獎金區間</span>
        <span id="real">`+cal+`</span>
        <span id="percent">3%</span>
    </div>
    <div class="rbox">
        <span>固定將金總額</span>
        <span>均分</span>
        <span id="fixed">`+Math.round((cal * 0.03) * 0.4)+`</span>
        <span id="fixpeople">`+Math.round(((cal * 0.03) * 0.4) / people)+`</span>
    </div>`
        // real.innerText = cal
        // percent.innerText = '3%';
        // fixed.innerText = (cal * 0.03) * 0.4;
        // fixpeople.innerText = ((cal * 0.03) * 0.4) / people;

    } else if (6000000 <= cal && cal <= 6499999) {
        result.innerHTML = 
        `<div class="rbox">
        <span>扣除後營業額</span>
        <span>獎金區間</span>
        <span id="real">`+cal+`</span>
        <span id="percent">2.6%</span>
    </div>
    <div class="rbox">
        <span>固定將金總額</span>
        <span>均分</span>
        <span id="fixed">`+Math.round((cal * 0.026) * 0.4)+`</span>
        <span id="fixpeople">`+Math.round(((cal * 0.026) * 0.4) / people)+`</span>
    </div>`
        // real.innerText = cal
        // percent.innerText = '2.6%';
        // fixed.innerText = (cal * 0.026) * 0.4;
        // fixpeople.innerText = Math.round(((cal * 0.026) * 0.4) / people);

    } else if (5500000 <= cal && cal <= 5999999) {
        result.innerHTML = 
        `<div class="rbox">
        <span>扣除後營業額</span>
        <span>獎金區間</span>
        <span id="real">`+cal+`</span>
        <span id="percent">2.5%</span>
    </div>
    <div class="rbox">
        <span>固定將金總額</span>
        <span>均分</span>
        <span id="fixed">`+Math.round((cal * 0.025) * 0.4)+`</span>
        <span id="fixpeople">`+Math.round(((cal * 0.025) * 0.4) / people)+`</span>
    </div>`
        // real.innerText = cal
        // percent.innerText = '2.5%';
        // fixed.innerText = (cal * 0.025) * 0.4;
        // fixpeople.innerText = Math.round(((cal * 0.025) * 0.4) / people);

    } else if (5000000 <= cal && cal <= 5499999) {
        result.innerHTML = 
        `<div class="rbox">
        <span>扣除後營業額</span>
        <span>獎金區間</span>
        <span id="real">`+cal+`</span>
        <span id="percent">2.4%</span>
    </div>
    <div class="rbox">
        <span>固定將金總額</span>
        <span>均分</span>
        <span id="fixed">`+Math.round((cal * 0.024) * 0.4)+`</span>
        <span id="fixpeople">`+Math.round(((cal * 0.024) * 0.4) / people)+`</span>
    </div>`
        // real.innerText = cal
        // percent.innerText = '2.4%';
        // fixed.innerText = (cal * 0.024) * 0.4;
        // fixpeople.innerText = Math.round(((cal * 0.024) * 0.4) / people);

    } else if (4500000 <= cal && cal <= 4999999) {
        result.innerHTML = 
        `<div class="rbox">
        <span>扣除後營業額</span>
        <span>獎金區間</span>
        <span id="real">`+cal+`</span>
        <span id="percent">2.3%</span>
    </div>
    <div class="rbox">
        <span>固定將金總額</span>
        <span>均分</span>
        <span id="fixed">`+Math.round((cal * 0.023) * 0.4)+`</span>
        <span id="fixpeople">`+Math.round(((cal * 0.023) * 0.4) / people)+`</span>
    </div>`
        // real.innerText = cal
        // percent.innerText = '2.3%';
        // fixed.innerText = (cal * 0.023) * 0.4;
        // fixpeople.innerText = Math.round(((cal * 0.023) * 0.4) / people);

    } else if (4000000 <= cal && cal <= 4499999) {
        result.innerHTML = 
        `<div class="rbox">
        <span>扣除後營業額</span>
        <span>獎金區間</span>
        <span id="real">`+cal+`</span>
        <span id="percent">2.2%</span>
    </div>
    <div class="rbox">
        <span>固定將金總額</span>
        <span>均分</span>
        <span id="fixed">`+Math.round((cal * 0.022) * 0.4)+`</span>
        <span id="fixpeople">`+Math.round(((cal * 0.022) * 0.4) / people)+`</span>
    </div>`
        // real.innerText = cal
        // percent.innerText = '2.2%';
        // fixed.innerText = (cal * 0.022) * 0.4;
        // fixpeople.innerText = Math.round(((cal * 0.022) * 0.4) / people);

    } else if (3500000 <= cal && cal <= 3999999) {
        result.innerHTML = 
        `<div class="rbox">
        <span>扣除後營業額</span>
        <span>獎金區間</span>
        <span id="real">`+cal+`</span>
        <span id="percent">1.9%</span>
    </div>
    <div class="rbox">
        <span>固定將金總額</span>
        <span>均分</span>
        <span id="fixed">`+Math.round((cal * 0.019) * 0.4)+`</span>
        <span id="fixpeople">`+Math.round(((cal * 0.019) * 0.4) / people)+`</span>
    </div>`
        // real.innerText = cal
        // percent.innerText = '1.9%';
        // fixed.innerText = (cal * 0.019) * 0.4;
        // fixpeople.innerText = Math.round(((cal * 0.019) * 0.4) / people);

    } else if (3000000 <= cal && cal <= 3499999) {
        result.innerHTML = 
        `<div class="rbox">
        <span>扣除後營業額</span>
        <span>獎金區間</span>
        <span id="real">`+cal+`</span>
        <span id="percent">0.8%</span>
    </div>
    <div class="rbox">
        <span>固定將金總額</span>
        <span>均分</span>
        <span id="fixed">`+Math.round((cal * 0.008) * 0.4)+`</span>
        <span id="fixpeople">`+Math.round(((cal * 0.008) * 0.4) / people)+`</span>
    </div>`
        // real.innerText = cal
        // percent.innerText = '0.8%';
        // fixed.innerText = (cal * 0.008) * 0.4;
        // fixpeople.innerText = Math.round(((cal * 0.008) * 0.4) / people);

    } else if (2500000 <= cal && cal <= 2999999) {
        result.innerHTML = 
        `<div class="rbox">
        <span>扣除後營業額</span>
        <span>獎金區間</span>
        <span id="real">`+cal+`</span>
        <span id="percent">0.5%</span>
    </div>
    <div class="rbox">
        <span>固定將金總額</span>
        <span>均分</span>
        <span id="fixed">`+Math.round((cal * 0.005) * 0.4)+`</span>
        <span id="fixpeople">`+Math.round(((cal * 0.005) * 0.4) / people)+`</span>
    </div>`
        // real.innerText = cal;
        // percent.innerText = '0.5%';
        // fixed.innerText = (cal * 0.005) * 0.4;
        // fixpeople.innerText = Math.round(((cal * 0.005) * 0.4) / people);

    } else if (2000000 <= cal && cal <= 2499999) {
        result.innerHTML = 
        `<div class="rbox">
        <span>扣除後營業額</span>
        <span>獎金區間</span>
        <span id="real">`+cal+`</span>
        <span id="percent">0.3%</span>
    </div>
    <div class="rbox">
        <span>固定將金總額</span>
        <span>均分</span>
        <span id="fixed">`+Math.round((cal * 0.003) * 0.4)+`</span>
        <span id="fixpeople">`+Math.round(((cal * 0.003) * 0.4) / people)+`</span>
    </div>`
        // real.innerText = cal;
        // percent.innerText = '0.3%';
        // fixed.innerText = (cal * 0.003) * 0.4;
        // fixpeople.innerText = Math.round(((cal * 0.003) * 0.4) / people);

    } else {
        result.innerText = '扣除後營業額：' + cal + '，未達發放獎金標準。'
    }

}

function pay() {
    var receipt = document.querySelector('.receipt');
    var paid = document.querySelector('.paid');
    receipt.slideUp("slow");
    paid.slideDown("slow");
}

