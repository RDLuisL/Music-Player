var tnum = 'es';

$(document).ready(function () {

    $(document).click(function (e) {
        $('.translate_wrapper, .more_lang').removeClass('active');
    });

    $('.translate_wrapper .current_lang').click(function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass('active');

        setTimeout(function () {
            $('.more_lang').toggleClass('active');
        }, 5);
    });


    /*TRANSLATE*/
    translate(tnum);

    $('.more_lang .lang').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.more_lang').removeClass('active');

        var img = $(this).find('img').attr('src');
        var lang = $(this).attr('data-value');
        var tnum = lang;
        translate(tnum);

        $('.current_lang .lang-txt').text(lang);
        $('.current_lang img').attr('src', img);

        if (lang == 'ar') {
            $('body').attr('dir', 'rtl');
        } else {
            $('body').attr('dir', 'ltr');
        }

    });
});

function translate(tnum) {
    $('h1').text(trans[0][tnum]);
    $('p').text(trans[1][tnum]);
    $('.content a span').text(trans[2][tnum]);
}

var trans = [
    {
        es: 'El Planeta de los Simios: Nuevo Reino',
        en: 'Kindom of the Ape of Planet',
        pt: 'Planeta dos Macacos: Novo Reino',
        fr: 'La Planète des singes : Nouveau royaume',
        de: 'Planet der Affen: Neues Königreich',
        cn: '猿猴星球王国',
        ar: 'مملكة كوكب القرد'
    }, {
        en: 'Is the latest installment in the iconic science fiction saga. Set in a dystopian future, the film follows the struggle between humans and intelligent apes led by Caesar. After a devastating war, the apes establish a peaceful society in the forest, while humans are left divided and fighting to survive. However, peace is threatened when a group of humans led by the evil General Barks seeks to unleash chaos and destroy the apes. Caesar, facing his own inner darkness, is forced to lead his people in an epic battle for freedom and survival. With impressive visual effects and an exciting narrative, the film explores themes of identity, morality, and the fate of humanity. "Planet of the Apes: New Kingdom" captivates the audience with its thrilling action and powerful performances, leaving a lasting impression on the viewer.',
        pt: 'É a mais recente entrega da icônica saga de ficção científica. Ambientado em um futuro distópico, o filme acompanha a luta entre humanos e macacos inteligentes liderados por César. Após uma guerra devastadora, os macacos estabelecem uma sociedade pacífica na floresta, enquanto os humanos ficam divididos e lutam para sobreviver. No entanto, a paz é ameaçada quando um grupo de humanos liderado pelo malévolo General Barks busca desencadear o caos e destruir os macacos. César, enfrentando sua própria escuridão interior, é obrigado a liderar seu povo em uma batalha épica pela liberdade e sobrevivência. Com impressionantes efeitos visuais e uma narrativa emocionante, o filme explora temas de identidade, moralidade e o destino da humanidade. "Planeta dos Macacos: Novo Reino" cativa o público com sua ação emocionante e performances poderosas, deixando uma impressão duradoura no espectador.',
        es: 'Es la última entrega de la icónica saga de ciencia ficción. Ambientada en un futuro distópico, la película sigue la lucha entre humanos y simios inteligentes liderados por César. Después de una devastadora guerra, los simios establecen una sociedad pacífica en el bosque, mientras que los humanos quedan divididos y luchan por sobrevivir. Sin embargo, la paz se ve amenazada cuando un grupo de humanos liderados por el malvado General Barks busca desatar el caos y destruir a los simios. César, enfrentando su propia oscuridad interior, se ve obligado a liderar a su pueblo en una batalla épica por la libertad y la supervivencia. Con impresionantes efectos visuales y una narrativa emocionante, la película explora temas de identidad, moralidad y el destino de la humanidad. "El Planeta de los Simios: Nuevo Reino" cautiva a la audiencia con su acción trepidante y sus poderosas actuaciones, dejando una impresión duradera sobre el espectador.',
        fr: "est le dernier volet de la saga emblématique de science-fiction. Situé dans un futur dystopique, le film suit la lutte entre les humains et les singes intelligents dirigés par César. Après une guerre dévastatrice, les singes établissent une société pacifique dans la forêt, tandis que les humains restent divisés et luttent pour survivre. Cependant, la paix est menacée lorsqu'un groupe d'humains dirigé par le maléfique Général Barks cherche à déchaîner le chaos et à détruire les singes. César, confronté à sa propre obscurité intérieure, est contraint de mener son peuple dans une bataille épique pour la liberté et la survie. Avec des effets visuels impressionnants et un récit captivant, le film explore les thèmes de l'identité, de la moralité et du destin de l'humanité. La Planète des Singes: Nouveau Royaume captive le public avec son action palpitante et ses performances puissantes, laissant une impression durable sur le spectateur.",
        de: 'ist die neueste Fortsetzung der ikonischen Science-Fiction-Saga. In einer dystopischen Zukunft angesiedelt, verfolgt der Film den Kampf zwischen Menschen und intelligenten Affen unter der Führung von Caesar. Nach einem verheerenden Krieg errichten die Affen eine friedliche Gesellschaft im Wald, während die Menschen zerstritten sind und ums Überleben kämpfen. Doch der Frieden wird bedroht, als eine Gruppe von Menschen unter der bösen Führung von General Barks das Chaos entfesseln und die Affen zerstören will. Caesar, der mit seiner eigenen inneren Dunkelheit konfrontiert ist, wird gezwungen, sein Volk in einer epischen Schlacht um Freiheit und Überleben zu führen. Mit beeindruckenden visuellen Effekten und einer spannenden Handlung erkundet der Film Themen wie Identität, Moral und das Schicksal der Menschheit. "Planet der Affen: Neues Königreich" fesselt das Publikum mit seiner atemberaubenden Action und kraftvollen Darstellungen und hinterlässt einen bleibenden Eindruck beim Zuschauer.',
        cn: '是标志性的科幻系列的最新一部作品。故事设定在一个反乌托邦的未来，讲述了人类和由凯撒领导的智能猿之间的斗争。经过一场毁灭性的战争，猿族在森林中建立了一个和平的社会，而人类则分裂并为生存而战。然而，当由邪恶的巴克斯将军领导的一群人类试图制造混乱并摧毁猿族时，和平受到了威胁。凯撒面对自己内心的黑暗，被迫带领他的人民进行一场关乎自由和生存的史诗般的战斗。凭借令人印象深刻的视觉效果和扣人心弦的叙事，这部电影探讨了身份、道德和人类命运等主题。《猩球崛起：新王国》以其惊心动魄的动作和强大的表演吸引了观众，给观众留下了深刻的印象。',
        ar: 'كوكب القرود: مملكة جديدة" (2024) هو أحدث إصدار في سلسلة الخيال العلمي الأيقونية. يُعيد الفيلم القتال بين البشر والقرود الذكية بقيادة سيزار في مستقبل ديستوبي. بعد حرب مدمرة، أسست القرود مجتمعًا سلميًا في الغابة'
    }, {
        en: 'See More',
        pt: 'Saiba mais',
        es: 'Más información',
        fr: 'En savoir plus',
        de: 'Weitere Infos',
        cn: '查看更多',
        ar: 'مشاهدة المزيد'
    },

];
