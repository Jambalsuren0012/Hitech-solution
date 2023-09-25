$(function(){
  // initMainMenus();
  setTimeout(initMainMenusScroll, 300);
  initChatButton();
  initDotNav();
  initTogglers();
  initDropdownSelects();
  initSlideSubmit();
  // initLogoutTimer(); //Uncomment this line to enable logout timer.
  initRowSelector();
  $(window).on('resize', initMainMenusScroll);
})

function initMainMenus(){
  var slidesToShow = Math.floor(($(window).height() - 80 - 80)/90);
  var slick = $('.menu-container').slick({
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>'
  });

  $('.menu-container').slick('slickGoTo', $('.menu-container a.uk-active').index())
}

function initMainMenusScroll(){
  var activeMenu = $('.menu-container a.uk-active');
  var position = activeMenu.index() * activeMenu.height();
  if(position > $(window).height() - 200){
    $('.side-menu>.scrollbar-macosx>.scroll-content').scrollTop(position);
  }
  
}

function initChatButton(){
  $('.container>.chat-button').click(function(){
    var $this = $(this);
    if($this.hasClass('active')){
      $this.removeClass('active');
      $('#chat-switcher').children('li').first().children('a').click();
      hideSidePanel();
    }else{
      $this.addClass('active');
      $('#chat-switcher').children('li').last().children('a').click();
      showSidePanel();
    }
  });

  $('h2>.close-chat').click(function(event){
    event.preventDefault();
    $('.container>.chat-button').click();
  })
}
 
function initDotNav() {
  $('.uk-dotnav.small-blue').parent('[data-uk-slider]').on('focusitem.uk.slider',function(ev, index, item){
    $(this).find('.uk-dotnav.small-blue>li').removeClass('uk-active');
    $(this).find('.uk-dotnav.small-blue>li').eq(index).addClass('uk-active');
  })
}

function initDropdownSelects() {
  $('.click-select .uk-dropdown li>a').click(function(ev){
    ev.preventDefault();
    var $this = $(this);
    $this.parents('.click-select').children('input[type=hidden]').val($this.data('value')||$this.text());
    $this.parents('.click-select').find('.selected-text').html($this.data('html')||$this.html());
  })
}

function initSlideSubmit() {
  $(".slide-submit button").draggable({cancel: false, containment: "parent", axis: "x", stop: function() {
    if (($(this).parent().width() / 2) < ($(this).position().left + 8)) {
      $(this).css({left: "auto", right: 0}).addClass("submitted"); // .draggable("disable");
      $(this).closest("form").submit();
    } else {
      $(this).css({left: "0px", right: "auto"});
    }
  }}).on("click", function() {
    return false;
  });
}

var miniMonths = [];

function addEventToMiniClndr(startdate, enddate){
  
  var loaded = false;
      
  var i = 0;
  while(miniMonths.length > i){
    if(startdate == miniMonths[i]){
      loaded = true;
    }
    i++;
  }

  if(loaded) return true;
  
  miniMonths.push(startdate);
  
  apiCall(
    api_callservice_url,
    {
      call: 'get_calendar_events',
      data: JSON.stringify({
        locale: _locale,
        startdate: startdate,
        enddate: enddate,
      })
    }, 
    function(response){
      if(response.success == 1){

        var days = Object.keys(response.result.retdata).map(function(key) {
          return [key, response.result.retdata[key]];
        });

        var i = 0;
        while(days.length > i){
          var day = days[i];

          var j = 0;
          while(day[1].length > j){
            var d = day[1][j];
            
            events.push({
              date: moment(day[0]).format('YYYY-MM-DD'),
              title: d.txndesc,
              url: '#',
            });

            j++;
          }

          i++;
        }
        
        events.push({
          date: '2019-10-01',
          title: 'test',
          url: '#',
        });

        miniClndr.setEvents(events);

      } 
    }, 
    function(error){
    }
  );
}

function initMiniClndr(events){
  miniMonths.push(moment(new Date()).format('YYYY-MM-01'));
  
  var myClndr = $('#mini-clndr').clndr({
    daysOfTheWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weekOffset: 1,
    template: $('#mini-clndr-template').html(),
    events: events,
    adjacentDaysChangeMonth:true,
    forceSixRows: true,
    clickEvents: {
      click: function(target) {
        if(target.events.length) {
          var daysContainer = $('#mini-clndr').find('.days-container');
          daysContainer.toggleClass('show-events', true);
          $('#mini-clndr').find('.x-button').click( function() {
            daysContainer.toggleClass('show-events', false);
          });
        }
      },
      onMonthChange: function(month) {
        addEventToMiniClndr(moment(month).startOf('month').format('YYYY-MM-DD'), moment(month).endOf('month').format('YYYY-MM-DD'));
      }
    }
  });
  return myClndr;
}

function showSidePanel(){
  if($(window).width()>1400) return;
  var sidePanel = $('.main-grid>.uk-width:last-child');
  $('<div class="backdrop" onclick="hideSidePanel()">').insertBefore(sidePanel);
  sidePanel.addClass('uk-active');
}
function hideSidePanel(){
  if($(window).width()>1400) return;
  $('.main-grid>.uk-width:last-child').removeClass('uk-active');
  setTimeout(function(){$('.main-grid>.backdrop').remove();}, 500)
}

function initTogglers(activeIndex){
  $('.toggler').click(function(event){
    event.preventDefault();
                  
    if($(event.target).hasClass('toggle-skip') || $(event.target).parentsUntil($(this), '.toggle-skip').length) return;
    var container = $(this).closest('.toggler-container');
    container.find('.toggled-content').slideToggle(function(){
      if($(this).css('display')=='none'){
        container.removeClass('active');
      }else{
        container.addClass('active');
      }
    });
    $(window).trigger('resize');
  })
}

function initJsSwitch() {
  var isCorporate = $('body').hasClass('corporate');
  var color = isCorporate?'#27a563':'#0082da';
  var secondaryColor = isCorporate?'#ccf1e0':'#90dcff';
  $('.js-switch').each(function(i, el){
    var _color = $(el).data('color')|| color;
    var _secondaryColor = $(el).data('secondary-color')|| secondaryColor;
    var switchery = new Switchery(el, {
      color: _color,
      secondaryColor :_secondaryColor,
      size: 'small'
    });
  })
}

function initDateRangePicker() {
  $("div.daterange").each(function(){
    $(this).dateRangePicker({
      separator: ' to ',
      autoClose: true,
      endDate: moment().format('YYYY.MM.DD'),
      monthSelect: true,
      yearSelect: true,
      showShortcuts: true,
      shortcuts :
      {
        'prev': ['week','month','year'],
        'next-days':null,
        'next':null
      },
      getValue: function()
      {
        var $this = $(this);
        return $this.children('.start').text() + ' to ' + $this.children('.end').text();
      },
      setValue: function(s, s1, s2)
      {
        var $this = $(this);
        $this.siblings('.daterange-start').val(s1);
        $this.siblings('.daterange-end').val(s2);
        $this.children('.start').text(moment(s1).format('YYYY.MM.DD'));
        $this.children('.end').text(moment(s2).format('YYYY.MM.DD'));
      }
    });
  })
}

function initDateRangePickerFromToday() {
  $("div.daterange").each(function(){
    $(this).dateRangePicker({
      separator: ' to ',
      autoClose: true,
//      endDate: moment().format('YYYY.MM.DD'),
      startDate: moment().format('YYYY.MM.DD'),
      monthSelect: true,
      yearSelect: true,
      showShortcuts: true,
      shortcuts :
      {
        'prev': ['week','month','year'],
        'next-days':null,
        'next':null
      },
      getValue: function()
      {
        var $this = $(this);
        return $this.children('.start').text() + ' to ' + $this.children('.end').text();
      },
      setValue: function(s, s1, s2)
      {
        var $this = $(this);
        $this.siblings('.daterange-start').val(s1);
        $this.siblings('.daterange-end').val(s2);
        $this.children('.start').text(moment(s1).format('YYYY.MM.DD'));
        $this.children('.end').text(moment(s2).format('YYYY.MM.DD'));
      }
    });
  })
}

function initDatePicker() {
  $("div.date").each(function(){
    $(this).dateRangePicker({
      separator: ' to ',
      autoClose: true,
      singleDate: true,
      singleMonth: true,
      //endDate: moment().format('YYYY.MM.DD'),
      getValue: function()
      {
        var $this = $(this);
        return $this.children('.start').text();
      },
      setValue: function(s, s1, s2)
      {
        var $this = $(this);
        $this.siblings('.date').val(s);
        $this.children('.start').text(moment(s).format('YYYY.MM.DD'));
      }
    });
  })
}

function initToggleEdit() {
  $('.toggle-edit').click(function(event){
    event.preventDefault();
    var $this = $(this);
    if($this.hasClass('active')){
      $this.removeClass('active');
      $this.closest('tr').find('input.naked-readonly').attr('readonly', true)
      $this.closest('tr').find('select.naked-readonly').attr('disabled', true)
    }else{
      $this.addClass('active');
      $this.closest('tr').find('input.naked-readonly').attr('readonly', false).focus();
      $this.closest('tr').find('select.naked-readonly').attr('disabled', false).focus();
    }
  })
}

function initRowSelector(){
  $('table>thead>tr>th:first-child>input[type=checkbox]').click(function(){
    var $this = $(this);
    if($this.prop('checked')){
      $this.closest('table').find('tbody>tr>td:first-child>input[type=checkbox]').not(':checked').click();
    }else{
      $this.closest('table').find('tbody>tr>td:first-child>input[type=checkbox]:checked').click();
    }
  })
}

function initLogoutTimer(){
  // append modal to <body>
  var $body = $('body');
  $body.append('<div class="uk-modal" id="modal_idle">' +
  '<div class="uk-modal-dialog">' +
      '<div class="uk-modal-header">' +
          '<h3 class="uk-modal-title">Your session is about to expire!</h3>' +
      '</div>' +
      '<p>You\'ve been inactive for a while. For your security, we\'ll log you out automatically.</p>' +
      '<p>Click "Stay Online" to continue your session.</p>' +
      '<p>Your session will expire in <span class="uk-text-bold text-red" id="sessionSecondsRemaining"></span> seconds.</p>' +
      '<div class="uk-modal-footer uk-text-right">' +
          '<button id="staySigned" type="button" class="round-blue-button lower uk-modal-close uk-margin-right">Stay Online</button><button type="button" class="round-light-gray-blue-button" id="logoutSession">Logout</button>' +
      '</div>' +
  '</div>' +
  '</div>');

  var modal = UIkit.modal("#modal_idle", {
      bgclose: false
  }),
  session = {
      //Logout Settings
      inactiveTimeout: 5000,      //(ms) The time until we display a warning message
      warningTimeout: 30000,      //(ms) The time until we log them out
      minWarning: 5000,           //(ms) If they come back to page (on mobile), The minumum amount, before we just log them out
      warningStart: null,         //Date time the warning was started
      warningTimer: null,         //Timer running every second to countdown to logout
      autologout: {
          logouturl: "login.html"
      },
      logout: function () {       //Logout function once warningTimeout has expired
          window.location = session.autologout.logouturl;
      }
  },
  $sessionCounter = $('#sessionSecondsRemaining').html(session.warningTimeout/1000);

  $(document).on("idle.idleTimer", function (event, elem, obj) {
  //Get time when user was last active
  var diff = (+new Date()) - obj.lastActive - obj.timeout,
      warning = (+new Date()) - diff;

  //On mobile js is paused, so see if this was triggered while we were sleeping
  if (diff >= session.warningTimeout || warning <= session.minWarning) {
      modal.hide();
  } else {
      //Show dialog, and note the time
      $sessionCounter.html(Math.round((session.warningTimeout - diff) / 1000));
      modal.show();
      session.warningStart = (+new Date()) - diff;

      //Update counter downer every second
      session.warningTimer = setInterval(function () {
          var remaining = Math.round((session.warningTimeout / 1000) - (((+new Date()) - session.warningStart) / 1000));
          if (remaining >= 0) {
              $sessionCounter.html(remaining);
          } else {
              session.logout();
          }
      }, 1000)
  }
  });

  $body
  //User clicked ok to stay online
  .on('click','#staySigned', function () {
      clearTimeout(session.warningTimer);
      modal.hide();
  })
  //User clicked logout
  .on('click','#logoutSession', function () {
      session.logout();
  });

  //Set up the timer, if inactive for 5 seconds log them out
  $(document).idleTimer(session.inactiveTimeout);
}

// TO BE REMOVED
function generateChartData() {
  var chartData = [];
  var firstDate = new Date( 2012, 0, 1 );
  firstDate.setDate( firstDate.getDate() - 500 );
  firstDate.setHours( 0, 0, 0, 0 );

  for ( var i = 0; i < 500; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setDate( newDate.getDate() + i );

    var value = Math.round( Math.random() * ( 40 + i ) ) + 100 + i;

    chartData.push( {
      "date": newDate,
      "value": value
    } );
  }
  return chartData;
}

function generateChartData2() {
  var chartData = [];
  var firstDate = new Date();
  firstDate.setMonth(firstDate.getMonth() - 20);
  var visits = 100000;
  for (var i = 0; i < 20; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      var newDate = new Date(firstDate);
      newDate.setMonth(newDate.getMonth() + i);
      
      visits += 100000;

      chartData.push({
          date: newDate,
          visits: visits
      });
  }

  for (i = 20; i < 25; i++) {
    var newDate = new Date(firstDate);
    newDate.setMonth(newDate.getMonth() + i);
    chartData.push({
      date: newDate,
      visits: null
    });
  }
  return chartData;
}
    