function openSelect(currentElem) {

    currentElem.classList.toggle('active');

    let setText = currentElem.querySelector('.set');
    const checkboxes = currentElem.querySelectorAll('.input-holder input');
    const labelTexts = currentElem.querySelectorAll('.input-holder label');
    const selectWrapClose = currentElem.querySelector('.select-wrap-close');
    const selectWrapArr = currentElem.querySelector('.select-wrap-arr');

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', () => {


            if (Array.from(checkboxes).every(element => !element.checked)) {
                setText.innerHTML = labelTexts[0].innerHTML;
                setText.classList.remove('black');
                selectWrapClose.classList.remove('active');
                selectWrapArr.style.display = 'flex';
            }
            if (checkboxes[i].checked) {
                setText.classList.add('black');
                selectWrapClose.classList.add('active');
                selectWrapArr.style.display = 'none';
            }
            if (checkboxes[0].checked) {
                setText.innerHTML = labelTexts[0].innerHTML;
            }
            if (checkboxes[1].checked) {
                setText.innerHTML = labelTexts[1].innerHTML;
            }
            if (checkboxes[0].checked && checkboxes[1].checked) {
                setText.innerHTML = labelTexts[0].innerHTML + ', ' + labelTexts[1].innerHTML;
            }
        });
    }

    selectWrapClose.addEventListener('click', () => {
        setText.innerHTML = labelTexts[0].innerHTML;
        setText.classList.remove('black');
        selectWrapClose.classList.remove('active');
        selectWrapArr.style.display = 'flex';
        checkboxes.forEach(el => {
            el.checked = false;
        })
    })
}

$(document).ready(function() {
    $(".select a.set-1").click(function() {
        $(".select-options-set-1").toggle();
        $(".select-options-set-2 , .select-options-set-3, .select-options-set-4, .select-options-set-5").hide();
    });

    $(".select a.set-2").click(function() {
        $(".select-options-set-2").toggle();
        $(".select-options-set-1 , .select-options-set-3, .select-options-set-4, .select-options-set-5").hide();
    });
    $(".select a.set-3").click(function() {
        $(".select-options-set-3").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-4, .select-options-set-5").hide();
    });
    $(".select a.set-4").click(function() {
        $(".select-options-set-4").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-3, .select-options-set-5").hide();
    });
    $(".select a.set-5").click(function() {
        $(".select-options-set-5").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-3, .select-options-set-4").hide();
    });

    $(".tag-container-1").click(function() {
        $(".select-options-set-1").toggle();
        $(".select-options-set-2 , .select-options-set-3, .select-options-set-4, .select-options-set-5").hide();
    });
    $(".tag-container-2").click(function() {
        $(".select-options-set-2").toggle();
        $(".select-options-set-1 , .select-options-set-3, .select-options-set-4, .select-options-set-5").hide();
    });
    $(".tag-container-3").click(function() {
        $(".select-options-set-3").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-4, .select-options-set-5").hide();
    });
    $(".tag-container-4").click(function() {
        $(".select-options-set-4").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-3, .select-options-set-5").hide();
    });
    $(".tag-container-5").click(function() {
        $(".select-options-set-5").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-3, .select-options-set-4").hide();
    });

    /*   $('#option-1').click(function(){
           $('.tag-option-1').toggle();
           $(".set-1").css('display','none');
           $(".mid-input-1").css('border','none');
           $(".tag-container-1").css('opacity','1');
           $(".tag-container-1").css('border','1px solid #1F1F1F');
       });

       $('#option-2').click(function(){
           $('.tag-option-2').toggle();
       });
       $('#option-3').click(function(){
           $('.tag-option-3').toggle();
       });

       $('#option-4').click(function(){
           $('.tag-option-4').toggle();
       });

       $('#option-5').click(function(){
           $('.tag-option-5').toggle();
       });

       $('#option-6').click(function(){
           $('.tag-option-6').toggle();
       });*/
});

function showfilter() {
    const filterBtn = document.querySelector('.filter-btn'),
        filter = document.querySelector(' .catalog__left'),
        catalogFiltersBtn = document.querySelector(' .catalog-filters__btn'),
        selectOptions = document.querySelectorAll(' .select-options');


    filterBtn.addEventListener('click', () => {
        filter.classList.add('active');
        filter.classList.add('b-show');
        document.body.classList.add('no-scroll')
        selectOptions.forEach(el => {
            el.style.display = 'none';
        })
    })
    catalogFiltersBtn.addEventListener('click', () => {
        filter.classList.remove('active');
        filter.classList.remove('b-show');
        document.body.classList.remove('no-scroll')
    })
}
showfilter();

function showCount(currentElem) {
    currentElem.classList.toggle('active');
}