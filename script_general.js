(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"backgroundColorDirection":"vertical","gap":10,"definitions": [{"fontWeight":"bold","data":{"name":"Label28174"},"textDecoration":"none","width":280,"backgroundOpacity":0,"paddingTop":0,"id":"label4056","fontFamily":"Arial","horizontalAlign":"center","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"verticalAlign":"middle","top":17,"paddingRight":0,"fontColor":"#FFFFFF","height":50,"toolTipHorizontalAlign":"center","text":trans('label4056.text'),"fontSize":30,"borderRadius":0,"maxHeight":50,"class":"Label","maxWidth":280,"fontStyle":"normal","borderSize":0,"minWidth":280,"shadow":false,"minHeight":50,"right":"1.45%"},{"data":{"name":"--SETTINGS"},"gap":10,"width":85,"backgroundOpacity":0,"children":["this.Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE"],"paddingTop":0,"id":"Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","horizontalAlign":"left","paddingBottom":0,"propagateClick":true,"overflow":"scroll","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","top":"17.26%","paddingRight":0,"height":430,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"maxHeight":430,"scrollBarColor":"#000000","class":"Container","maxWidth":85,"creationPolicy":"inAdvance","borderSize":0,"minWidth":85,"shadow":false,"minHeight":430,"right":"1.22%"},{"data":{"name":"Image4995"},"width":80,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","horizontalAlign":"left","paddingBottom":0,"propagateClick":true,"paddingLeft":0,"top":21.17,"verticalAlign":"top","paddingRight":0,"height":85,"toolTipHorizontalAlign":"center","click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"maxWidth":80,"class":"Image","borderRadius":0,"left":26.3,"borderSize":0,"minWidth":80,"shadow":false,"minHeight":80,"scaleMode":"fill"},{"class":"PlayList","items":[{"camera":"this.panorama_E02EA864_EAC5_19DC_41EA_48477B372C20_camera","media":"this.panorama_E02EA864_EAC5_19DC_41EA_48477B372C20","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_E02EA864_EAC5_19DC_41EA_48477B372C20_camera"},{"data":{"name":"-button set"},"gap":3,"width":85,"backgroundOpacity":0,"paddingTop":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"overflow":"scroll","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","top":"14%","paddingRight":0,"height":320,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"vertical","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"maxHeight":320,"scrollBarColor":"#000000","class":"Container","maxWidth":85,"creationPolicy":"inAdvance","borderSize":0,"minWidth":85,"shadow":false,"minHeight":320,"right":"0%"},{"shadow":false,"playbackBarHeadShadowOpacity":0.7,"right":0,"toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"subtitlesVerticalAlign":"bottom","toolTipBorderRadius":3,"toolTipShadowOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0,1],"id":"MainViewer","playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderColor":"#AAAAAA","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#999999","progressBackgroundColorRatios":[0,1],"subtitlesTextShadowVerticalLength":1,"playbackBarBorderSize":2,"toolTipFontSize":12,"subtitlesFontWeight":"normal","paddingRight":0,"toolTipTextShadowColor":"#666666","progressRight":10,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarOpacity":1,"transitionMode":"blending","subtitlesTextShadowHorizontalLength":1,"progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"subtitlesTop":0,"translationTransitionDuration":1000,"progressBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","playbackBarHeight":20,"playbackBarHeadShadow":true,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#222222","#444444"],"progressBorderColor":"#AAAAAA","doubleClickAction":"toggle_fullscreen","class":"ViewerArea","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderRadius":4,"progressBarOpacity":1,"playbackBarProgressBorderColor":"#000000","progressBottom":1,"subtitlesHorizontalAlign":"center","borderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"toolTipPaddingRight":6,"progressHeight":20,"minHeight":50,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","playbackBarBackgroundOpacity":1,"playbackBarHeadOpacity":1,"toolTipShadowSpread":0,"toolTipShadowVerticalLength":0,"toolTipFontStyle":"normal","progressBorderSize":2,"paddingTop":0,"playbackBarHeadShadowHorizontalLength":0,"progressBarBorderRadius":4,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipTextShadowBlurRadius":3,"paddingBottom":0,"propagateClick":false,"playbackBarLeft":0,"toolTipPaddingBottom":4,"progressBorderRadius":4,"subtitlesOpacity":1,"progressBarBorderSize":0,"firstTransitionDuration":0,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColor":["#222222","#444444"],"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":30,"playbackBarHeadBackgroundColorRatios":[0,1],"top":0,"surfaceReticleColor":"#FFFFFF","vrPointerSelectionTime":1500,"subtitlesBorderSize":0,"bottom":0,"subtitlesBottom":50,"toolTipFontWeight":"normal","toolTipShadowColor":"#333333","playbackBarHeadShadowVerticalLength":0,"surfaceReticleSelectionColor":"#FFFFFF","progressLeft":10,"playbackBarProgressBorderRadius":0,"subtitlesPaddingRight":5,"toolTipBorderSize":1,"subtitlesShadow":false,"toolTipPaddingTop":4,"vrPointerSelectionColor":"#FF0000","playbackBarHeadBorderRadius":0,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"toolTipOpacity":0.5,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":10,"left":0,"playbackBarHeadWidth":6,"subtitlesEnabled":true,"playbackBarProgressBorderSize":0},{"data":{"name":"button menu sup"},"gap":10,"width":110,"backgroundOpacity":0,"paddingTop":0,"id":"Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"overflow":"visible","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"middle","bottom":"4.6%","paddingRight":0,"height":110,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"horizontal","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"scrollBarColor":"#000000","class":"Container","creationPolicy":"inAdvance","borderSize":0,"right":"0%","minWidth":1,"shadow":false,"minHeight":1},{"viewerArea":"this.MainViewer","arrowKeysAction":"translate","aaEnabled":true,"surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","gyroscopeEnabled":true,"class":"PanoramaPlayer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"thumbnailUrl":"media/panorama_E02EA864_EAC5_19DC_41EA_48477B372C20_t.jpg","vfov":180,"hfovMax":130,"class":"Panorama","label":trans('panorama_E02EA864_EAC5_19DC_41EA_48477B372C20.label'),"hfov":360,"hfovMin":"150%","frames":[{"cube":{"levels":[{"width":9216,"rowCount":3,"url":"media/panorama_E02EA864_EAC5_19DC_41EA_48477B372C20_0/{face}/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_E02EA864_EAC5_19DC_41EA_48477B372C20_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_E02EA864_EAC5_19DC_41EA_48477B372C20_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E02EA864_EAC5_19DC_41EA_48477B372C20_t.jpg"}],"partial":false,"pitch":0,"data":{"label":"Lobby"},"id":"panorama_E02EA864_EAC5_19DC_41EA_48477B372C20"}],"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":1,"width":"100%","paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"propagateClick":false,"overflow":"hidden","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","paddingRight":0,"desktopMipmappingEnabled":false,"mobileMipmappingEnabled":false,"children":["this.MainViewer","this.label4056","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","height":"100%","backgroundColor":["#000000"],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","class":"Player","scripts":{"updateVideoCues":TDV.Tour.Script.updateVideoCues,"translate":TDV.Tour.Script.translate,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"existsKey":TDV.Tour.Script.existsKey,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playAudioList":TDV.Tour.Script.playAudioList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getKey":TDV.Tour.Script.getKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"openLink":TDV.Tour.Script.openLink,"isPanorama":TDV.Tour.Script.isPanorama,"clone":TDV.Tour.Script.clone,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizStart":TDV.Tour.Script.quizStart,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"init":TDV.Tour.Script.init,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizFinish":TDV.Tour.Script.quizFinish,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMainViewer":TDV.Tour.Script.getMainViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"shareSocial":TDV.Tour.Script.shareSocial,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"showWindow":TDV.Tour.Script.showWindow,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"textToSpeech":TDV.Tour.Script.textToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"registerKey":TDV.Tour.Script.registerKey,"getPixels":TDV.Tour.Script.getPixels,"historyGoForward":TDV.Tour.Script.historyGoForward,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setLocale":TDV.Tour.Script.setLocale,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"downloadFile":TDV.Tour.Script.downloadFile,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initAnalytics":TDV.Tour.Script.initAnalytics,"setValue":TDV.Tour.Script.setValue,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"mixObject":TDV.Tour.Script.mixObject,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData},"start":"this.init()","downloadEnabled":false,"creationPolicy":"inAdvance","borderSize":0,"data":{"name":"Player28156","defaultLocale":"fr","locales":{"fr":"locale/fr.txt"},"initialScale":0.65,"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"rate":1}},"defaultVRPointer":"gaze","minWidth":20,"shadow":false,"minHeight":20};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Jul 25 2024