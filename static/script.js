function start_game() {
    var plus_value = $('#check_plus').is(":checked")
    var minus_value = $('#check_minus').is(":checked")
    var mult_value = $('#check_mult').is(":checked")
    var div_value = $('#check_div').is(":checked")
    if (!(plus_value || minus_value || mult_value || div_value)) {
        alert('Выберите хотя бы одну операцию')
        return
    }
    var operations = {
        'add': plus_value,
        'substr': minus_value,
        'mult': mult_value,
        'div': div_value 
    }
    var amount = $('#tasks_amount').val()
    var difficulty = ($('#radio_easy').is(":checked")) ? 'easy' : 
                     ($('#radio_medium').is(":checked")) ? 'medium' : 
                     ($('#radio_hard').is(":checked")) ? 'hard' : null
    $.post("/start_game", {
        data: JSON.stringify({
            'operations': operations,
            'amount': amount,
            'difficulty': difficulty
        })
    })
}

function update_range_label(value) {
    console.log(value)
    $('#range_label').text(value)
}

function change_language(language) {
    $.post("/change_language", {
        data: JSON.stringify(language)
    })
    window.location.href = "/";
}

THEME = 'light'

$(document).ready(function() {
    $.get({
        url: "/theme",
        success: function(theme) {
            console.log(theme + '?')
            THEME = theme
            set_theme(theme) 
        }
    })
})

$('body').bind('beforeunload',function(){
    $.post("/theme", {
        data: JSON.stringify(THEME)
    })
    console.log(THEME)
})

function set_theme(theme) {
    if (theme == 'dark') {
        $("nav").removeClass('navbar-light bg-light')
        $("nav").addClass('navbar-dark bg-dark')
        $("body").addClass('body-dark')
        $("footer").addClass('footer-dark')
        $("#float_a").addClass('float-dark')
        $("div").addClass(function (index, current_class) {
            var added_class
            if (current_class == 'card') {
                added_class = 'card-dark'
            }
            if (current_class == 'card-body') {
                added_class = 'card-body-dark'
            }
            return added_class
        })
        // $("a").addClass(function (index, current_class) {
        //     var added_class
        //     if (current_class == 'card') {
        //         added_class = 'card-dark'
        //     }
        //     if (current_class == 'card-body') {
        //         added_class = 'card-body-dark'
        //     }
        //     return added_class
        // })
    } else if (theme == 'light') {
        $("nav").removeClass('navbar-dark bg-dark')
        $("nav").addClass('navbar-light bg-light')
        $("body").removeClass('body-dark')
        $("footer").removeClass('footer-dark')
        $("div").removeClass('card-body-dark card-dark')
        $("#float_a").removeClass('float-dark')
    }
    $.post("/theme", {
        data: JSON.stringify(THEME)
    })
    console.log(THEME)
}

function switch_theme() {
    if (THEME == 'light') {
        $("nav").removeClass('navbar-light bg-light')
        $("nav").addClass('navbar-dark bg-dark')
        $("body").addClass('body-dark')
        $("footer").addClass('footer-dark')
        $("#float_a").addClass('float-dark')
        $("div").addClass(function (index, current_class) {
            var added_class
            if (current_class == 'card') {
                added_class = 'card-dark'
            }
            if (current_class == 'card-body') {
                added_class = 'card-body-dark'
            }
            return added_class
        })
        THEME = 'dark'
    } else if (THEME == 'dark') {
        $("nav").removeClass('navbar-dark bg-dark')
        $("nav").addClass('navbar-light bg-light')
        $("body").removeClass('body-dark')
        $("footer").removeClass('footer-dark')
        $("div").removeClass('card-body-dark card-dark')
        $("#float_a").removeClass('float-dark')
        THEME = 'light'
    }
    $.post("/theme", {
        data: JSON.stringify(THEME)
    })
    console.log(THEME)
}

