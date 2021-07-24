const input_3d_text = document.getElementById('input_3d_text');
const text_show = document.getElementById('text_show');

const code_time = document.getElementsByClassName('code_time');
const code_shadowtype = document.getElementsByClassName('code_shadowtype');
const code_class0 = document.getElementsByClassName('code_class0');
const code_class1 = document.getElementsByClassName('code_class1');

const code_color1 = document.getElementsByClassName('code_color1');
const code_color2 = document.getElementsByClassName('code_color2');
const code_color3 = document.getElementsByClassName('code_color3');

const code_distance1 = document.getElementsByClassName('code_distance1');
const code_distance2 = document.getElementsByClassName('code_distance2');
const code_distance3 = document.getElementsByClassName('code_distance3');
const code_distancepx = document.getElementsByClassName('code_distancepx');

const bt_change_text_div = document.getElementById('bt_change_text_div');
const change_html_css = document.getElementById('change_html_css');
// const bt_change_text_div_textC = document.getElementById('bt_change_text_div_textC');

let dataId = "1";

let distance_px = 12;
let distance1 = distance_px / 3;
let distance2 = distance1 * 2;
let distance3 = distance_px;

let timing = 0.5;

let colorW1 = document.getElementById('colorWell1');
let colorW2 = document.getElementById('colorWell2');
let colorW3 = document.getElementById('colorWell3');

let color1 = '#ef476f';
let color2 = '#a23450';
let color3 = '#4d1a26';

let shadowType = 'text-shadow';
let classType = '.text_pop span';

let tex_shadow1 = shadowType + ':' + pos_to_neg(distance1) + 'px ' + distance1 + 'px 0px ' + color1 + ' ';
let tex_shadow2 = ' ' + pos_to_neg(distance2) + 'px ' + distance2 + 'px 0px ' + color2 + ' ';
let tex_shadow3 = ' ' + pos_to_neg(distance3) + 'px ' + distance3 + 'px 0px ' + color3 + ' ';
let trans_anim1 = ' transform: translate(' + distance_px + 'px, ' + pos_to_neg(distance_px) + 'px )';

function pos_to_neg(num) {
    return -Math.abs(num);
}

focusMethod = function getFocus(idElem) {
    document.getElementById(idElem).focus();
}
// -----------------------------------------------------------------------------------------------
bt_change_text_div.addEventListener('click', () => {
    if (bt_change_text_div.textContent === 'change to div') {
        bt_change_text_div.textContent = 'change to text';
        document.getElementById('div_show').style.display = 'flex';
        document.getElementById('text_show').style.display = 'none';
        shadowType = 'box-shadow';
        classType = '.div_pop';
        for (var i = 0; i < code_class0.length; i++) {
            code_class0.item(i).textContent = classType;
        }
        for (var i = 0; i < code_class1.length; i++) {
            code_class1.item(i).textContent = '';
        }
        direction(dataId);
    } else {
        bt_change_text_div.textContent = 'change to div';
        document.getElementById('div_show').style.display = 'none';
        document.getElementById('text_show').style.display = 'flex';
        shadowType = 'text-shadow';
        classType = '.text_pop span';
        for (var i = 0; i < code_class0.length; i++) {
            code_class0.item(i).textContent = '.text_pop';
        }
        for (var i = 0; i < code_class1.length; i++) {
            code_class1.item(i).textContent = ' span';
        }
        direction(dataId);
    }

});

change_html_css.addEventListener('click', () => {
    if (change_html_css.textContent === 'See html') {
        change_html_css.textContent = 'See css';
        document.getElementById('code_html').style.display = 'block';
        document.getElementById('code_css').style.display = 'none';
    } else {
        change_html_css.textContent = 'See html';
        document.getElementById('code_html').style.display = 'none';
        document.getElementById('code_css').style.display = 'block';
    }

});

// -----------------------------------------------------------------------------------------------
input_3d_text.addEventListener("keyup", function (e) {
    // console.log(e.key); 

    if (e.key == 'Backspace') {
        text_show.removeChild(text_show.lastElementChild);
    } else {
        text_show.innerHTML = '';
        for (let i = 0; i < input_3d_text.value.length; i++) {
            console.log(input_3d_text.value[i]);
            if (input_3d_text.value[i] == " ") {
                text_show.innerHTML += '<span>&nbsp;</span>';
            } else {
                text_show.innerHTML += '<span>' + input_3d_text.value[i] + '</span>';
            }
        }
    }
    if (input_3d_text.value == null || input_3d_text.value == "") {
        text_show.innerHTML = '';
        let default_3dtext = '3d text';
        for (let i = 0; i < default_3dtext.length; i++) {
            console.log(default_3dtext[i]);
            if (default_3dtext[i] == " ") {
                text_show.innerHTML += '<span>&nbsp;</span>';
            } else {
                text_show.innerHTML += '<span>' + default_3dtext[i] + '</span>';
            }
        }
        console.log("null");
    }
});
// -----------------------------------------------------------------------------------------------
function copyFunction() {
    const copyText = document.getElementById("code_pre_text").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}
document.getElementById('copy_b_code').addEventListener('click', copyFunction);
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
// -----------------------------------------------------------------------------------------------
document.getElementById('colorWell1').addEventListener('input', () => {
    color1 = colorW1.value;
    document.getElementById('colorP1').textContent = colorW1.value;

    for (var i = 0; i < code_color1.length; i++) {
        code_color1.item(i).textContent = colorW1.value;
    }

    direction(dataId);
});
document.getElementById('copy1').addEventListener('click', () => {
    copyToClipboard(colorW1.value);
});
document.getElementById('colorWell2').addEventListener('input', () => {
    color2 = colorW2.value;
    document.getElementById('colorP2').textContent = colorW2.value;

    for (var i = 0; i < code_color2.length; i++) {
        code_color2.item(i).textContent = colorW2.value;
    }

    direction(dataId);
});
document.getElementById('copy2').addEventListener('click', () => {
    copyToClipboard(colorW2.value);
});
document.getElementById('colorWell3').addEventListener('input', () => {
    color3 = colorW3.value;
    document.getElementById('colorP3').textContent = colorW3.value;

    for (var i = 0; i < code_color3.length; i++) {
        code_color3.item(i).textContent = colorW3.value;
    }

    direction(dataId);
});
document.getElementById('copy3').addEventListener('click', () => {
    copyToClipboard(colorW3.value);
});
// -----------------------------------------------------------------------------------------------

window.addEventListener('load', (event) => {
    for (var i = 0; i < code_class0.length; i++) {
        code_class0.item(i).textContent = '.text_pop';
    }
    for (var i = 0; i < code_class1.length; i++) {
        code_class1.item(i).textContent = ' span';
    }
    var cssAnimation = document.createElement('style');
    cssAnimation.setAttribute("id", "animaChange"); cssAnimation.type = 'text/css';
    var animOut = document.createTextNode(
        classType + '{  animation: in ' + timing + 's forwards;} ' +
        classType + ':hover{  animation: out ' + timing + 's forwards;}' +
        '@-webkit-keyframes out {' +
        '0% { ' + tex_shadow1 + ', }' +
        '50% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
        '100% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
        '}' +
        '@-webkit-keyframes in {' +
        ' 0% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
        '33% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
        '66% { ' + tex_shadow1 + ',}' +
        '100% { ' + tex_shadow1 + ', }' +
        '}');
    cssAnimation.appendChild(animOut);
    document.getElementsByTagName("head")[0].appendChild(cssAnimation);

    updateTextInput(12);
    updateTextInputTime(0.5);
});

function updateTextInput(val) {
    distance_px = val;
    distance1 = distance_px / 3;
    distance2 = distance1 * 2;
    distance3 = distance_px;
    // console.log(dataId);
    direction(dataId);
}
function updateTextInputTime(val) {
    timing = val;
    direction(dataId);
}
// -----------------------------------------------------------------------------------------------
Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
// -----------------------------------------------------------------------------------------------
function direction(dataid) {
    switch (dataid) {
        case "0":

            tex_shadow1 = shadowType + ':' + distance1 + 'px ' + distance1 + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + distance2 + 'px ' + distance2 + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + distance3 + 'px ' + distance3 + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + pos_to_neg(distance_px) + 'px, ' + pos_to_neg(distance_px) + 'px )';

            // ---------------------------------------------------------------------------------------- code

            for (var i = 0; i < code_time.length; i++) {
                code_time.item(i).textContent = timing + 's';
            }
            for (var i = 0; i < code_shadowtype.length; i++) {
                code_shadowtype.item(i).textContent = shadowType;
            }
            for (var i = 0; i < code_distance1.length; i++) {
                code_distance1.item(i).textContent = (Math.round((distance1 + Number.EPSILON) * 10) / 10) + 'px';
            }
            for (var i = 0; i < code_distance2.length; i++) {
                code_distance2.item(i).textContent = (Math.round((distance2 + Number.EPSILON) * 10) / 10) + 'px';
            }
            for (var i = 0; i < code_distance3.length; i++) {
                code_distance3.item(i).textContent = distance3 + 'px';
                code_distancepx.item(i).textContent = pos_to_neg(distance_px) + 'px';
            }
            // ---------------------------------------------------------------------------------------- code
            document.getElementById("animaChange").remove();

            var cssAnimation = document.createElement('style');
            cssAnimation.setAttribute("id", "animaChange");
            cssAnimation.type = 'text/css';
            var animOut = document.createTextNode(
                classType + '{  animation: in ' + timing + 's forwards;} ' +
                classType + ':hover{  animation: out ' + timing + 's forwards;}' +
                '@-webkit-keyframes out {' +
                '0% { ' + tex_shadow1 + ', }' +
                '50% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '100% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '}' +
                '@-webkit-keyframes in {' +
                ' 0% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '33% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '66% { ' + tex_shadow1 + ',}' +
                '100% { ' + tex_shadow1 + ', }' +
                '}');
            cssAnimation.appendChild(animOut);
            document.getElementsByTagName("head")[0].appendChild(cssAnimation);

            tex_shadow1 = shadowType + ':' + distance1 + 'px ' + distance1 + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + distance2 + 'px ' + distance2 + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + distance3 + 'px ' + distance3 + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + pos_to_neg(distance_px) + 'px, ' + pos_to_neg(distance_px) + 'px )';

            break;
        case "1":
            document.getElementById("animaChange").remove();

            tex_shadow1 = shadowType + ':' + pos_to_neg(distance1) + 'px ' + distance1 + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + pos_to_neg(distance2) + 'px ' + distance2 + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + pos_to_neg(distance3) + 'px ' + distance3 + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + distance_px + 'px, ' + pos_to_neg(distance_px) + 'px )';


            // ---------------------------------------------------------------------------------------- code
            for (var i = 0; i < code_time.length; i++) {
                code_time.item(i).textContent = timing + 's';
            }
            for (var i = 0; i < code_shadowtype.length; i++) {
                code_shadowtype.item(i).textContent = shadowType;
            }
            for (var i = 0; i < code_distance1.length; i++) {
                if (i % 2 == 0) {
                    code_distance1.item(i).textContent = pos_to_neg((Math.round((distance1 + Number.EPSILON) * 10) / 10)) + 'px';
                } else {
                    code_distance1.item(i).textContent = (Math.round((distance1 + Number.EPSILON) * 10) / 10) + 'px';
                }
            }
            for (var i = 0; i < code_distance2.length; i++) {
                if (i % 2 == 0) {
                    code_distance2.item(i).textContent = pos_to_neg((Math.round((distance2 + Number.EPSILON) * 10) / 10)) + 'px';
                } else {
                    code_distance2.item(i).textContent = (Math.round((distance2 + Number.EPSILON) * 10) / 10) + 'px';
                }
            }
            for (var i = 0; i < code_distance3.length; i++) {
                if (i % 2 == 0) {
                    code_distance3.item(i).textContent = pos_to_neg(distance3) + 'px';
                    code_distancepx.item(i).textContent = distance_px + 'px';
                } else {
                    code_distance3.item(i).textContent = distance3 + 'px';
                    code_distancepx.item(i).textContent = pos_to_neg(distance_px) + 'px';
                }
            }
            // ---------------------------------------------------------------------------------------- code

            var cssAnimation = document.createElement('style');
            cssAnimation.setAttribute("id", "animaChange");
            cssAnimation.type = 'text/css';
            var animOut = document.createTextNode(
                classType + '{  animation: in ' + timing + 's forwards;} ' +
                classType + ':hover{  animation: out ' + timing + 's forwards;}' +
                '@-webkit-keyframes out {' +
                '0% { ' + tex_shadow1 + ', }' +
                '50% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '100% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '}' +
                '@-webkit-keyframes in {' +
                ' 0% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '33% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '66% { ' + tex_shadow1 + ',}' +
                '100% { ' + tex_shadow1 + ', }' +
                '}');
            cssAnimation.appendChild(animOut);
            document.getElementsByTagName("head")[0].appendChild(cssAnimation);

            tex_shadow1 = shadowType + ':' + distance1 + 'px ' + distance1 + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + distance2 + 'px ' + distance2 + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + distance3 + 'px ' + distance3 + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + pos_to_neg(distance_px) + 'px, ' + pos_to_neg(distance_px) + 'px )';

            break;
        case "2":
            document.getElementById("animaChange").remove();

            tex_shadow1 = shadowType + ':' + pos_to_neg(distance1) + 'px ' + pos_to_neg(distance1) + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + pos_to_neg(distance2) + 'px ' + pos_to_neg(distance2) + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + pos_to_neg(distance3) + 'px ' + pos_to_neg(distance3) + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + distance_px + 'px, ' + distance_px + 'px )';


            // ---------------------------------------------------------------------------------------- code
            for (var i = 0; i < code_time.length; i++) {
                code_time.item(i).textContent = timing + 's';
            }
            for (var i = 0; i < code_shadowtype.length; i++) {
                code_shadowtype.item(i).textContent = shadowType;
            }
            for (var i = 0; i < code_distance1.length; i++) {
                code_distance1.item(i).textContent = pos_to_neg((Math.round((distance1 + Number.EPSILON) * 10) / 10)) + 'px';
            }
            for (var i = 0; i < code_distance2.length; i++) {
                code_distance2.item(i).textContent = pos_to_neg((Math.round((distance2 + Number.EPSILON) * 10) / 10)) + 'px';
            }
            for (var i = 0; i < code_distance3.length; i++) {
                code_distance3.item(i).textContent = pos_to_neg(distance3) + 'px';
                code_distancepx.item(i).textContent = distance_px + 'px';
            }
            // ---------------------------------------------------------------------------------------- code



            var cssAnimation = document.createElement('style');
            cssAnimation.setAttribute("id", "animaChange");
            cssAnimation.type = 'text/css';
            var animOut = document.createTextNode(
                classType + '{  animation: in ' + timing + 's forwards;} ' +
                classType + ':hover{  animation: out ' + timing + 's forwards;}' +
                '@-webkit-keyframes out {' +
                '0% { ' + tex_shadow1 + ', }' +
                '50% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '100% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '}' +
                '@-webkit-keyframes in {' +
                ' 0% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '33% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '66% { ' + tex_shadow1 + ',}' +
                '100% { ' + tex_shadow1 + ', }' +
                '}');
            cssAnimation.appendChild(animOut);
            document.getElementsByTagName("head")[0].appendChild(cssAnimation);

            tex_shadow1 = shadowType + ':' + distance1 + 'px ' + distance1 + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + distance2 + 'px ' + distance2 + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + distance3 + 'px ' + distance3 + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + pos_to_neg(distance_px) + 'px, ' + pos_to_neg(distance_px) + 'px )';
            break;
        case "3":
            document.getElementById("animaChange").remove();

            tex_shadow1 = shadowType + ':' + distance1 + 'px ' + pos_to_neg(distance1) + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + distance2 + 'px ' + pos_to_neg(distance2) + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + distance3 + 'px ' + pos_to_neg(distance3) + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + pos_to_neg(distance_px) + 'px, ' + distance_px + 'px )';

            // ---------------------------------------------------------------------------------------- code
            for (var i = 0; i < code_time.length; i++) {
                code_time.item(i).textContent = timing + 's';
            }
            for (var i = 0; i < code_shadowtype.length; i++) {
                code_shadowtype.item(i).textContent = shadowType;
            }
            for (var i = 0; i < code_distance1.length; i++) {
                if (i % 2 == 0) {
                    code_distance1.item(i).textContent = (Math.round((distance1 + Number.EPSILON) * 10) / 10) + 'px';
                } else {
                    code_distance1.item(i).textContent = pos_to_neg((Math.round((distance1 + Number.EPSILON) * 10) / 10)) + 'px';
                }
            }
            for (var i = 0; i < code_distance2.length; i++) {
                if (i % 2 == 0) {
                    code_distance2.item(i).textContent = (Math.round((distance2 + Number.EPSILON) * 10) / 10) + "px";
                } else {
                    code_distance2.item(i).textContent = pos_to_neg((Math.round((distance2 + Number.EPSILON) * 10) / 10)) + 'px';
                }
            }
            for (var i = 0; i < code_distance3.length; i++) {
                if (i % 2 == 0) {
                    code_distance3.item(i).textContent = distance3 + 'px';
                    code_distancepx.item(i).textContent = pos_to_neg(distance_px) + 'px';
                } else {
                    code_distance3.item(i).textContent = pos_to_neg(distance3) + 'px';
                    code_distancepx.item(i).textContent = distance_px + 'px';
                }
            }
            // ---------------------------------------------------------------------------------------- code


            var cssAnimation = document.createElement('style');
            cssAnimation.setAttribute("id", "animaChange");
            cssAnimation.type = 'text/css';
            var animOut = document.createTextNode(
                classType + '{  animation: in ' + timing + 's forwards;} ' +
                classType + ':hover{  animation: out ' + timing + 's forwards;}' +
                '@-webkit-keyframes out {' +
                '0% { ' + tex_shadow1 + ', }' +
                '50% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '100% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '}' +
                '@-webkit-keyframes in {' +
                ' 0% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '33% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '66% { ' + tex_shadow1 + ',}' +
                '100% { ' + tex_shadow1 + ', }' +
                '}');
            cssAnimation.appendChild(animOut);
            document.getElementsByTagName("head")[0].appendChild(cssAnimation);

            tex_shadow1 = shadowType + ':' + distance1 + 'px ' + distance1 + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + distance2 + 'px ' + distance2 + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + distance3 + 'px ' + distance3 + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + pos_to_neg(distance_px) + 'px, ' + pos_to_neg(distance_px) + 'px )';
            break;
        case "4":
            document.getElementById("animaChange").remove();

            tex_shadow1 = shadowType + ':' + '0px ' + distance1 + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + '0px ' + distance2 + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + '0px ' + distance3 + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + '0px' + ',' + pos_to_neg(distance_px) + 'px )';

            // ---------------------------------------------------------------------------------------- code
            for (var i = 0; i < code_time.length; i++) {
                code_time.item(i).textContent = timing + 's';
            }
            for (var i = 0; i < code_shadowtype.length; i++) {
                code_shadowtype.item(i).textContent = shadowType;
            }
            for (var i = 0; i < code_distance1.length; i++) {
                if (i % 2 == 0) {
                    code_distance1.item(i).textContent = '0px';
                } else {
                    code_distance1.item(i).textContent = (Math.round((distance1 + Number.EPSILON) * 10) / 10) + 'px';
                }
            }
            for (var i = 0; i < code_distance2.length; i++) {
                if (i % 2 == 0) {
                    code_distance2.item(i).textContent = '0px';
                } else {
                    code_distance2.item(i).textContent = (Math.round((distance2 + Number.EPSILON) * 10) / 10) + 'px';
                }
            }
            for (var i = 0; i < code_distance3.length; i++) {
                if (i % 2 == 0) {
                    code_distance3.item(i).textContent = '0px';
                    code_distancepx.item(i).textContent = '0px';
                } else {
                    code_distance3.item(i).textContent = distance3 + 'px';
                    code_distancepx.item(i).textContent = pos_to_neg(distance_px) + 'px';
                }
            }
            // ---------------------------------------------------------------------------------------- code

            var cssAnimation = document.createElement('style');
            cssAnimation.setAttribute("id", "animaChange");
            cssAnimation.type = 'text/css';
            var animOut = document.createTextNode(
                classType + '{  animation: in ' + timing + 's forwards;} ' +
                classType + ':hover{  animation: out ' + timing + 's forwards;}' +
                '@-webkit-keyframes out {' +
                '0% { ' + tex_shadow1 + ', }' +
                '50% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '100% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '}' +
                '@-webkit-keyframes in {' +
                ' 0% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '33% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '66% { ' + tex_shadow1 + ',}' +
                '100% { ' + tex_shadow1 + ', }' +
                '}');
            cssAnimation.appendChild(animOut);
            document.getElementsByTagName("head")[0].appendChild(cssAnimation);

            tex_shadow1 = shadowType + ':' + distance1 + 'px ' + distance1 + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + distance2 + 'px ' + distance2 + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + distance3 + 'px ' + distance3 + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + pos_to_neg(distance_px) + 'px, ' + pos_to_neg(distance_px) + 'px )';
            break;
        case "5":
            document.getElementById("animaChange").remove();

            tex_shadow1 = shadowType + ':' + '0px ' + pos_to_neg(distance1) + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + '0px ' + pos_to_neg(distance2) + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + '0px ' + pos_to_neg(distance3) + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + '0px, ' + distance_px + 'px )';

            // ---------------------------------------------------------------------------------------- code
            for (var i = 0; i < code_time.length; i++) {
                code_time.item(i).textContent = timing + 's';
            }
            for (var i = 0; i < code_shadowtype.length; i++) {
                code_shadowtype.item(i).textContent = shadowType;
            }
            for (var i = 0; i < code_distance1.length; i++) {
                if (i % 2 == 0) {
                    code_distance1.item(i).textContent = '0px';
                } else {
                    code_distance1.item(i).textContent = pos_to_neg((Math.round((distance1 + Number.EPSILON) * 10) / 10)) + 'px';
                }
            }
            for (var i = 0; i < code_distance2.length; i++) {
                if (i % 2 == 0) {
                    code_distance2.item(i).textContent = '0px';
                } else {
                    code_distance2.item(i).textContent = pos_to_neg((Math.round((distance2 + Number.EPSILON) * 10) / 10)) + 'px';
                }
            }
            for (var i = 0; i < code_distance3.length; i++) {
                if (i % 2 == 0) {
                    code_distance3.item(i).textContent = '0px';
                    code_distancepx.item(i).textContent = '0px';
                } else {
                    code_distance3.item(i).textContent = pos_to_neg(distance3) + 'px';
                    code_distancepx.item(i).textContent = distance_px + 'px';
                }
            }
            // ---------------------------------------------------------------------------------------- code

            var cssAnimation = document.createElement('style');
            cssAnimation.setAttribute("id", "animaChange");
            cssAnimation.type = 'text/css';
            var animOut = document.createTextNode(
                classType + '{  animation: in ' + timing + 's forwards;} ' +
                classType + ':hover{  animation: out ' + timing + 's forwards;}' +
                '@-webkit-keyframes out {' +
                '0% { ' + tex_shadow1 + ', }' +
                '50% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '100% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '}' +
                '@-webkit-keyframes in {' +
                ' 0% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ' , ' + tex_shadow3 + '; ' + trans_anim1 + '; }' +
                '33% { ' + tex_shadow1 + ' , ' + tex_shadow2 + ', }' +
                '66% { ' + tex_shadow1 + ',}' +
                '100% { ' + tex_shadow1 + ', }' +
                '}');
            cssAnimation.appendChild(animOut);
            document.getElementsByTagName("head")[0].appendChild(cssAnimation);

            tex_shadow1 = shadowType + ':' + distance1 + 'px ' + distance1 + 'px 0px ' + color1 + ' ';
            tex_shadow2 = ' ' + distance2 + 'px ' + distance2 + 'px 0px ' + color2 + ' ';
            tex_shadow3 = ' ' + distance3 + 'px ' + distance3 + 'px 0px ' + color3 + ' ';
            trans_anim1 = ' transform: translate(' + pos_to_neg(distance_px) + 'px, ' + pos_to_neg(distance_px) + 'px )';
            break;
        default:
            console.log("error")
    }
}

var make_button_active = function () {
    var siblings = ($(this).siblings());
    siblings.each(function (index) {
        $(this).removeClass('active');
    }
    )
    $(this).addClass('active');
    dataId = $(this).attr("data-id");
    direction(dataId);
}

$(document).ready(
    function () {
        $(".live_preview div").click(make_button_active);
    }
)

function rangeSlide(value) {
    document.getElementById('rangeValue').placeholder = "Distance: " + value;
}
function rangeSlideTime(value) {
    document.getElementById('rangeValueTime').placeholder = "Timing: " + value;

}
document.getElementById('rangeValue').addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('sliderRange').value = document.getElementById('rangeValue').value;
        document.getElementById('rangeValue').placeholder = "distance: " + document.getElementById('rangeValue').value;

        updateTextInput(document.getElementById('rangeValue').value);
        document.getElementById('rangeValue').value = "";
    }
});

document.getElementById('rangeValueTime').addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('sliderRangeTime').value = document.getElementById('rangeValue').value;
        document.getElementById('rangeValueTime').placeholder = "distance: " + document.getElementById('rangeValueTime').value;
        updateTextInput(document.getElementById('rangeValueTime').value);
        document.getElementById('rangeValueTime').value = "";
    }
});

// for (var i = 0; i < code_distance1.length; i++) {
//     console.log(i + ' ' + code_distance1.item(i).innerHTML);
// }

