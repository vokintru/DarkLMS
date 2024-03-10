chrome.storage.sync.get('enabled', function (data) {
    var run = (data.enabled || false)
    console.log(run)
    if (run) {
        var styleElement = document.createElement("style");
        styleElement.textContent = `
            :root {
                --color-text-main: #9d9d9d !important;
                --color-text-control: white !important;
                --color-text-secondary: grey !important;
                --color-text-heading: #ddd !important;
                --color-text-invert: #fff !important;
                --color-text-control: #000 !important;
                --color-text-status: #333 !important;
                --color-text-warning: #eb0909 !important;
                --color-text-positive: #29a629 !important;
                --color-spinner-label: grey !important;
                --color-background-main: #1d1d1d !important;
                --color-background-menu: #191919 !important;
                --color-background-tooltip: #444 !important;
                --color-background-panel: #1f1f1f !important;
                --color-background-active: #ffeba0 !important;
                --color-background-notification-center: #1a1a1a !important;
                --color-separator: #212121 !important;
                --color-separator-dark: hsla(0, 0%, 100%, 0.3) !important;
                --color-outline: #fc0 !important;
                --color-control-active: #1f1f1f !important;
                --color-control-hover: #171717 !important;
                --color-control-outline: #111111 !important;
                --color-control-outline-hover: #b3b3b3 !important;
                --color-checked-checkbox: #ffdb4d !important;
                --color-checked-checkbox-hover: #ffd633 !important;
                --color-link: #cccccc !important;
                --color-link-hover: #4d4d4d !important;
                --color-link-grey: grey !important;
                --color-link-grey-hover: #999 !important;
                --color-ticker: #ffdb4d !important;
                --color-button-active: #f3f1ed !important;
                --color-button-ok: #2db32d !important;
                --color-button-ok-hover: #29a629 !important;
                --color-button-ok-active: #2b992b !important;
                --color-text-heading: #fff !important;
                --color-button-action: #ffdb4d !important;
                --color-button-action-hover: #ffd633 !important;
                --color-button-action-active: #fc0 !important;
                --color-indicator-dark-green: #2db32d !important;
                --color-indicator-green: #a8de00 !important;
                --color-indicator-red: #ff5959 !important;
                --color-indicator-dark-grey: #ccc !important;
                --color-indicator-grey: rgba(0, 0, 0, 0.08) !important;
                --color-indicator-white: #fff !important;
                --color-indicator-yellow: #ffdd61 !important;
                --color-indicator-dot-red: #ff5959 !important;
                --color-indicator-dot-dark-grey: #ccc !important;
                --color-header-accepted: #2db32d !important;
                --color-header-accepted-after-deadline: #accd8c !important;
                --color-header-rework: #ff5959 !important;
                --color-status-ok: #2b992b !important;
                --color-status-redo: #eb0c0c !important;
                --color-status-active: #ffeba0 !important;
                --color-status-waiting: #eb9c3d !important;
                --color-status-accepted-after-deadline: #accd8c !important;
                --color-table-cell-text: #000 !important;
                --color-table-button-border: #979797 !important;
                --color-task-status-ok: #2eb72e !important;
                --color-task-status-waiting: #ffc800 !important;
                --color-task-status-redo: #ff5959 !important;
                --color-notification-error: #ff5959 !important;
                --color-notification-success: #29a629 !important;
                --color-comments-form-background: #1a1a1a !important;
                --color-comments-own-background: #1c1c1c !important;
                --color-comments-after-deadline-text: #fb0006 !important;
                --color-comments-after-deadline-border: #fb0006 !important;
                --color-comments-own-active-background: #ffeba0 !important;
                --color-comments-list-box-shadow: rgba(0, 0, 0, 0.08) !important;
                --color-schedule-events-outline: #6c6c6c !important;
                --color-schedule-secondary-text: #a8a8a8 !important;
                --color-schedule-event-elective: #d1f0d0 !important;
                --color-schedule-event-elective-hover: #b4e6b2 !important;
                --color-schedule-event-lesson: #e6e6e6 !important;
                --color-schedule-event-lesson-hover: #d9d9d9 !important;
                --color-schedule-event-reserve: #fce68e !important;
                --color-schedule-event-reserve-hover: #fedf6f !important;
                --color-schedule-event-vacation: #fce68e !important;
                --color-schedule-event-vacation-hover: #fedf6f !important;
                --color-schedule-event-vacation-text: #eb0c0c !important;
                --color-schedule-event-test: #d1ebff !important;
                --color-schedule-event-test-hover: #a3d6ff !important;
                --color-schedule-event-skip: #eb0c0c !important;
                --color-schedule-event-selected-text: #fff !important;
                --color-schedule-event-selected-background: #666 !important;
                --color-schedule-event-edited-background: #f5f5f5 !important;
                --color-schedule-unassigned-events-list: #000 !important;
                --opacity-schedule-event-passed: 0.6 !important;
                --color-filter-label-background: #dddcff !important;
                --color-filter-label-border: #c5c2f2 !important;
                --color-filter-clear-label-background: #1a1a1a !important;
                --color-filter-clear-label-border: #ccc !important;
                --color-filter-clear-label-text: #eb0c0c !important;
                --color-filter-value-separator: #8682c7 !important;
                --color-tag-blue: #247ba0 !important;
                --color-tag-green: #70c1b3 !important;
                --color-tag-red: #f25f5c !important;
                --color-variant-status-not-assigned: rgba(0, 0, 0, 0.08) !important;
                --color-variant-status-not-solved: #0090e6 !important;
                --color-variant-status-is-solving: rgba(0, 144, 230, 0.3) !important;
                --color-variant-status-has-solved: #777 !important;
                --color-student-graduated: #ffc100 !important;
                --color-student-expelled: #ff5959 !important;
                --color-antiplagiary-red: #eb0c0c !important;
                --color-antiplagiary-yellow: #ffdd61 !important;
                --color-antiplagiary-grey: rgba(0, 0, 0, var(--icon-grey-opacity)) !important;
                --color-antiplagiary-mark: #333 !important;
                --color-merge-deletes: rgba(255, 0, 0, 0.2) !important;
                --color-merge-additions: rgba(155, 185, 85, 0.2) !important;
            }
            body {
                background-color: #1c1c1c !important;
            }
            
            .Accordion {
                border: 1px solid #212121 !important;
            }
            
            
            .Accordion-Item {
                border-top: 1px solid #212121 !important;
                border-bottom: 0 !important;
            }
            
            .student-task-list__task-heading{
              color: #ffffff !important;
            }
            
            .ya-chat-widget_theme_dark.ya-chat-widget_desktop.ya-chat-widget_theme_light,
            .ya-chat-widget_theme_light.ya-chat-widget_desktop.ya-chat-widget_theme_light {
                display: none !important;
            }
            
            .material__chapter code,
            .material__chapter samp,
            .material__chapter var {
                color: darkgray !important;
            }
            
            .material__annotation {
                background-color: #131313 !important;
            }
            
            .material__annotation h2,
            .material__annotation p {
                color: #dddd !important;
            }
            
            .popup2_theme_normal:before {
                background: transparent !important;
            }
            
            .user2__menu.user2__menu {
                background: #1d1d1d !important;
            }
            
            .user2__menu-footer {
                background: #1a1a1a !important;
            }
            
            .y6c2ac--task-description__content table:not(.sample-tests) {
                display: none !important;
            }
            
            .student-task-list__task:hover {
                background: #1a1a1a !important;
                transition: transform 0.2s ease-in-out !important;
                transform: scale(1.02) !important;
            }
            
            
            .CodeMirror {
                color: #ddd !important;
            }
            
            .course-card{
              color: #fff !important;
            }
            
            .main-nav__current-course{
              color: #ffffff !important;
            }
            
            .lesson-card{
              color: #ffffff !important;
            }
            
            .Link_view_lyceum.Link_theme_normal{
              color: #fff !important;
            }
            
            .task-preview__task-name{
              color: #fff !important;
            }
            
            .user_account{
              color: #ffffff !important;
            }
            
            .material-list__material-link{
              color: #ffffff !important;
            }
            
            .CodeMirror-gutters {
                border-right: 1px solid #2f2f2f !important;
            }
            
            .cm-s-default .cm-def {
                color: #ffcc00 !important;
                opacity: 0.8 !important;
            }
            
            .cm-s-default .cm-builtin {
                color: #42aaff !important;
            }
            
            ::-webkit-scrollbar {
                width: 8px !important;
                height: 4px !important;
                outline: none !important;
            }
            ::-webkit-scrollbar-thumb {
                background: #0f0f0f !important;
                border-radius: 4px !important;
            }
            ::-webkit-scrollbar-track {
                background: #1f1f1f !important;
            }
            
            .Sideblock_theme_normal .Sideblock-Content {
                background: #1a1a1a !important;
            }
            
            .language-css .token.string, .style .token.string, .token.entity, .token.operator, .token.url {
                background: none !important;
            }
            
            code[class*=language-], pre[class*=language-] {
                text-shadow: none !important;
            }
            
            .material__comment-heading, .material__note-heading {
                color: #1f1f1f !important;
            }
            
            .material__note p,
            .material__note li {
                color: #3f3f3f !important;
            }
            
            .material__note var {
                color: #1d1d1d !important;
                font-weight: bold !important;
            }
            
            .material__note {
                border-radius: 10px !important;
            }
            
            
            .material__illustration[src*=svg] {
                filter: brightness(0.8) invert(1) !important;
            }
            
            .Theme_color_platform-blue {
                --color-link: #fff !important;
            }
            
            .nav-tab__inner {
                color: #fff !important;
            }
            
            .user-account__name {
                color: #fff !important;
            }
            
            .Link_view_lyceum.Link_theme_pseudo {
                color: #fff !important;
            }
            
            .Checkbox_view_lyceum.Checkbox_theme_normal {
                color: #fff !important;
            }
            .main-nav__course-link {
                color: #fff !important;
            }
            .main-nav__courses-link {
                color: #fff !important;
            }
            .nav-tab_view_button {
                border: 1px solid #fff
            }
            .Button2_theme_pseudo {
                border: 1px solid #fff;
                border-radius: 4px;
            }
        `;

        document.head.appendChild(styleElement);

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Получаем элемент div по классу
        var logoDiv = document.querySelector('.logo.logo_lang_ru');

        // Заменяем URL в атрибуте background-image
        logoDiv.style.backgroundImage = '';

        // Ваш готовый SVG-код
        var svgCode = '<a class="logo__link logo__link_type_service" title="Лицей" href="/"></a><svg xmlns="http://www.w3.org/2000/svg" width="205" height="52" viewBox="0 0 1027 110" fill="none">\n' +
            '<path d="M46.3086 94.3827V12.7654H38.9753C25.5309 12.7654 18.4691 19.5556 18.4691 29.6049C18.4691 41.0123 23.358 46.3086 33.4074 53.0988L41.6914 58.6667L17.7901 94.3827H0L21.4568 62.4691C9.09877 53.642 2.17283 45.0864 2.17283 30.5556C2.17283 12.358 14.8025 0 38.8395 0H62.7408V94.3827H46.3086ZM363.136 95.7407C341.543 95.7407 331.086 83.1111 331.086 60.2963C331.086 39.5185 341.815 24.716 362.457 24.716C370.469 24.716 376.444 26.0741 379.84 27.9753V41.6914C376.58 39.6543 370.469 37.4815 364.222 37.4815C353.63 37.4815 347.79 45.0864 347.79 59.8889C347.79 74.0123 352.543 82.9753 364.086 82.9753C370.877 82.9753 375.765 81.2099 379.84 78.358V91.5309C375.901 94.3827 370.605 95.7407 363.136 95.7407ZM262.099 89.7654C257.346 93.0247 249.741 95.7407 239.42 95.7407C218.778 95.7407 207.099 84.1975 207.099 60.4321C207.099 39.7901 216.469 24.716 236.16 24.716C252.321 24.716 262.778 33.679 262.778 57.4444V66H223.802C224.481 77.4074 228.963 82.9753 240.778 82.9753C248.654 82.9753 257.074 79.9877 262.099 76.5926V89.7654ZM313.704 94.3827L289.802 61.3827V94.3827H273.642V26.0741H289.802V58.1235L312.617 26.0741H328.914L306.099 58.1235L332.037 94.3827H313.704ZM203.16 81.6173V110H188.222V94.3827H151.963V110H137.025V81.6173H142.049C147.753 70.2099 148.84 48.6173 148.84 31.9136V26.0741H195.963V81.6173H203.16ZM114.074 26.0741H130.235V94.3827H114.074V65.8642H92.4815V94.3827H76.321V26.0741H92.4815V53.0988H114.074V26.0741ZM235.889 37.4815C228.148 37.4815 224.21 43.1852 223.802 54.0494H246.346V52.6914C246.346 44.1358 243.901 37.4815 235.889 37.4815ZM179.802 81.6173V38.8395H162.691V40.8765C162.691 52.6914 161.469 71.2963 156.988 81.6173H179.802Z" fill="#ffffff"></path>\n' +
            '<path d="M413.873 78.7654C413.873 78.7654 415.231 79.9877 418.49 79.9877C426.095 79.9877 426.367 69.8025 426.91 48.3457L428.132 0H482.453V94.3827H466.021V12.7654H443.478L442.527 48.0741C441.713 79.1728 439.54 95.7407 420.663 95.7407C416.182 95.7407 413.873 94.3827 413.873 94.3827V78.7654ZM496.076 26.0741H511.694V68.3086L536.41 26.0741H550.805V94.3827H535.187V52.1482L510.471 94.3827H496.076V26.0741ZM564.375 94.3827V26.0741H580.535V81.6173H601.449V26.0741H617.609V81.6173H624.807V110H609.868V94.3827H564.375ZM685.223 89.7654C680.47 93.0247 672.865 95.7407 662.544 95.7407C641.902 95.7407 630.223 84.1975 630.223 60.4321C630.223 39.7901 639.593 24.716 659.285 24.716C675.445 24.716 685.902 33.679 685.902 57.4444V66H646.927C647.606 77.4074 652.087 82.9753 663.902 82.9753C671.779 82.9753 680.198 79.9877 685.223 76.5926V89.7654ZM659.013 37.4815C651.273 37.4815 647.334 43.1852 646.927 54.0494H669.47V52.6914C669.47 44.1358 667.026 37.4815 659.013 37.4815ZM724.298 17.1111C711.261 17.1111 704.606 9.64198 704.606 0H718.187C718.187 4.61728 720.631 6.79012 724.298 6.79012C727.693 6.79012 729.866 4.48148 729.866 0H743.446C743.446 9.50617 737.063 17.1111 724.298 17.1111ZM696.73 26.0741H712.347V68.3086L737.063 26.0741H751.458V94.3827H735.841V52.1482L711.125 94.3827H696.73V26.0741Z" fill="#ffffff"></path>\n' +
            '</svg>';

        // Вставляем SVG-код внутрь div
        logoDiv.innerHTML = svgCode;

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        // Получаем элемент div по классу
        var logoDiv = document.querySelector('.icon_type_arrow-dropdown.icon_size_xs');

        // Заменяем URL в атрибуте background-image
        logoDiv.style.backgroundImage = '';

        // Ваш готовый SVG-код
        var svgCode = "<svg width='10' height='6' xmlns='http:/\/\www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='M0-2h10V8H0z'/><path fill='#ffffff' d='M10 0H0l5 6z'/></g></svg>";

        // Вставляем SVG-код внутрь div
        logoDiv.innerHTML = svgCode;

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        var logoDivs = document.querySelectorAll('.indicator_color_grey');

        // Проходим по каждому элементу и применяем изменения
        logoDivs.forEach(function(logoDiv) {
            logoDiv.style.background = '#ffffff'; // Изменяем фон
            logoDiv.innerHTML = ''; // Очищаем содержимое
        });

        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        // Получаем элемент div по классу
        var logoDiv = document.querySelector('.icon_type_arrow-short.icon_size_s');

        // Заменяем URL в атрибуте background-image
        logoDiv.style.backgroundImage = '';

        // Ваш готовый SVG-код
        var svgCode = '<svg width="16" height="16" fill="none" xmlns="http:/\/\www.w3.org/2000/svg"><path d="M8 9.585l4.793-4.79a1 1 0 0 1 1.414 1.415l-5.5 5.496a1 1 0 0 1-1.414 0l-5.5-5.496a1 1 0 0 1 1.414-1.415L8 9.585z" fill="#FFF"/></svg>';

        // Вставляем SVG-код внутрь div
        logoDiv.innerHTML = svgCode;

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        document.querySelector('.icon_type_search').style.filter = 'invert(100%)';
        document.querySelector('.icon_type_signal-outline').style.filter = 'invert(100%)';


});

chrome.storage.sync.get('enabled-baners', function (data) {
    var run = data['enabled-baners'] || false;
    console.log(run)
    //setTimeout(function() {}, 1000);
    if (run) {
        // Находим все элементы с классом 'course-banners js'
        var elements = document.querySelectorAll('.course-banners');

        // Проходим по каждому найденному элементу и удаляем его
        elements.forEach(function(element) {
            element.remove();
        });

        ///////////////////////////////////////////////////////////////////////////////////////

        // Находим элемент с классом "footer"
        var footerElement = document.querySelector('.footer__legal');

        // Проверяем, был ли найден элемент с классом "footer"
        if (footerElement) {
        //    // Если элемент найден, удаляем его из DOM
            footerElement.parentNode.removeChild(footerElement);
        }

        ///////////////////////////////////////////////////////////////////////////////////////

        // Находим элемент с классом "footer"
        var footerElement = document.querySelector('.footer__controls');

        // Проверяем, был ли найден элемент с классом "footer"
        if (footerElement) {
        //    // Если элемент найден, удаляем его из DOM
            footerElement.parentNode.removeChild(footerElement);
        }


        }
});