//Pour chaque question...
$(".question").each(function() {
    // Ajouter le bouton vrai
    $("<button>")
        .addClass("btn btn-success")
        .text("Vrai")
        .css("margin-right", "15px")
        .appendTo(this);
    // Ajouter le bouton faux
    $("<button>")
        .addClass("btn btn-danger")
        .text("Faux")
        .css("margin-right", "15px")
        .appendTo(this);
});

//Lorsqu'on clique sur un bouton dans une question
$(".question button").click(function() {
    //Contrôler  le bouton cliquer (vrai/faux) et le type de question (question-true/question-false) correspondent
    if(($(this).text() == "Vrai" & $(this).parent().hasClass("question-true")) || ($(this).text() == "Faux" & $(this).parent().hasClass("question-false"))) {
        $('<label>').addClass('text-success').text('Correct !').appendTo($(this).parent());
    } else {
        $('<label>').addClass('text-danger').text('Erreur !').appendTo($(this).parent());
    }
    //Désactiver l'autre bouton de la question
    $(this).siblings("button").attr("disabled", "disabled");
});