(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["20b496c49e4472d13b8334b604cb38f3"],{dalk:function(e,t,r){"use strict";r("5DmW");Object.defineProperty(t,"__esModule",{value:true});t.strings=void 0;var n=a(r("q1tI"));function a(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}var i18n=r("HEOz");var o={1:i18n._("Clear search"),2:i18n._("Filter"),3:i18n._("No results"),4:function _(e){return i18n._("Select all (%(numOptions))",{numOptions:e})},5:i18n._("Select none"),6:function _(e){return i18n.ngettext("%(num)s student","%(num)s students",e)},7:i18n._("All students"),8:i18n._("Select students"),9:function _(e){return i18n.ngettext("%(num)s author selected","%(num)s authors selected",e)},10:i18n._("All authors selected"),11:i18n._("Please select author(s)"),12:function _(e){return i18n.ngettext("%(num)s state selected","%(num)s states selected",e)},13:i18n._("All states selected"),14:i18n._("Select state"),15:function _(e){return i18n.ngettext("%(num)s school selected","%(num)s schools selected",e)},16:i18n._("All schools"),17:function _(e,t){return i18n.ngettext("Usernames must be alphanumeric, start with a letter, and             be %(min)s to %(num)s character long","Usernames must be alphanumeric, start with a letter, and be             %(min)s to %(num)s characters long",e,{min:t})},18:function _(){return i18n._("Too long.")},19:function _(){return i18n._("Oops. It looks like that profile doesn't exist.")},20:function _(){return i18n._("Oops. We’ve encountered an issue with your profile. Please             choose a new username from the <node>Settings page</node>")},34:function _(e){return i18n._("Unit: %(unitName)s",{unitName:e})},35:i18n._("Unit tests"),36:i18n._("Course challenges"),37:i18n._("Mastery challenges"),38:i18n._("You only have <bold>12 hours</bold> from when you started to finish this Mastery challenge!"),39:i18n._("Learn more about Mastery challenges"),40:i18n._("Course Mastery now has new <mclink>Mastery challenges</mclink>!"),41:i18n._("User program"),42:i18n._("Students with disabilities may be approved to take an extended-time test. It takes about 7 weeks to get approved, so <link1>gather your documentation and get your request in early</link1>."),43:i18n._("<link1>Subscribe to weekly email reports</link1> about your children."),44:i18n._("You can also <link1>organize class lists</link1> or <link2>create a new child account</link2>."),45:i18n._("Remove this teacher?"),46:i18n._("Removing this teacher will delete all assignments they’ve given you and remove you from their roster. You can’t undo this."),47:function _(e){return i18n.ngettext("You only have <bold>%(num)s hour</bold> from when you started to finish this Mastery challenge!","You only have <bold>%(num)s hours</bold> from when you started to finish this Mastery challenge!",e)},48:i18n._("Once your teacher creates a mastery goal or adds assignments for you, this class will show up on the left navigation of your homepage."),49:i18n._("If you don't see anything, remind your teacher you're waiting on them or try refreshing the page!"),50:i18n._("Review skills you’ve already seen. Level up to Mastered faster."),51:i18n._("Learn More"),52:i18n._("We’re removing Missions on June 30th, 2020"),53:i18n._("We’re removing Missions on <underline>June 30th, 2020</underline>"),54:function _(e){return i18n._("Looking for Missions? You can keep working on the <missionlink>%(missionName)s Mission</missionlink> until June 30th, 2020.",{missionName:e})},55:i18n._('By clicking "Link this email address", you agree to our <link1>Terms of Service</link1> and <link2>Privacy Policy</link2>.'),56:i18n._("Level up faster!"),57:i18n._("Take the Course Challenge to level up on what you already know."),58:i18n._("Show what you know!"),59:i18n._("Take the Course Challenge to show what you already know and what you need to practice."),60:i18n._("Start Course Challenge"),61:i18n._("No thanks"),62:i18n._("Ready for the Course Challenge?"),63:i18n._("That's right. Test your course skills in a challenge!"),64:i18n._("Put everything you've learned to the test and show what you know."),65:function _(e,t){return i18n.$_("It looks like you're accessing this content from multiple locations. Please close other locations, then return here and %(refresh)s. If this problem persists, %(letUsKnow)s.",{refresh:e,letUsKnow:t})},66:i18n._("let us know"),67:i18n._("NEW"),68:i18n._("Not started (0 points)")};t.strings=o},"nA/X":function(e,t,r){"use strict";r("pNMO");r("ma9I");r("TeQF");r("fbCW");r("x0AG");r("yXV3");r("2B1R");r("zKZe");r("5DmW");r("FZtP");Object.defineProperty(t,"__esModule",{value:true});t.getMasteryLevel=R;t.getNextUnitMasteryLevel=x;t.getGoalForCount=b;t.getIndicatorCount=V;t.getUpdatedMasteryPoints=ge;t.masteryLevelOrder=t.masteryColors=t.getMasteryPointChange=t.getExerciseLevelChanges=t.getTotalMasteryPointsAvailable=t.getTotalMasteryPointsEarned=t.getExerciseLevels=t.getMasteredExercises=t.getProficientExercises=t.getAllExercises=t.getContentItems=t.getLoggedOutMasteryMap=t.getNewLevel=t.getLiveMasteryDetails=t.getNumIncorrect=t.getNumCorrect=t.isCourseChallengeComplete=t.isCourseChallenge=t.isCourseChallengeType=t.areAllExercisesProficientOrAboveForQuiz=t.getMinimumMasteryLevelForQuizOrTest=t.getMinimumMasteryLevel=t.getMasteryLevelsForQuizOrTest=t.achievedMastery=t.getScoreAndDateText=t.getPercentCorrect=t.getRoundedPercent=t.getNextMasteryLevelDetails=t.getInProgressMasteryLevel=t.getNextMasteryLevel=t.getMasteryDisplay=t.getMasteryLevelForExerciseFromMap=t.levelPointsMap=t.masteryLevelDefinitions=t.unitMasteryPercentage=t.exerciseMasteryThresholds=t.masteryDisplayColors=t.masteryDisplayNames=t.COURSE_CHALLENGE_COMPLETE_SCORE=t.TEST_COMPLETE_LEVELS=t.QUIZ_COMPLETE_LEVELS=t.masteryLevelComparer=t.HAS_FULLY_MASTERED_STATE=t.getLevelChange=t.getLevelIndex=t.masteryValues=t.constants=t.masteryValueConstants=t.colors=void 0;var n=r("dalk");var a=r("ZC1Y");var o,i,s;function u(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};var n=Object.keys(r);if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(e){l(t,e,r[e])})}return t}function l(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var i18n=r("HEOz");var c=n.strings;var v={coral:"#ff714d"};t.colors=v;var f={UNFAMILIAR:"unfamiliar",ATTEMPTED:"attempted",FAMILIAR:"familiar",PROFICIENT:"proficient",MASTERED:"mastered"};t.masteryValueConstants=f;var d=u({},f,{LEVEL1:"level1",LEVEL2:"level2",LEVEL3:"level3",LEVEL4:"level4",LEVEL5:"level5",LEVEL6:"level6",STARTED:"started",COMPLETE:"complete"});t.constants=d;var g=[d.UNFAMILIAR,d.ATTEMPTED,d.FAMILIAR,d.PROFICIENT,d.MASTERED];t.masteryValues=g;var E=function e(t){return g.indexOf(t)};t.getLevelIndex=E;var L=function e(t,r){if(t===d.UNFAMILIAR&&r===d.ATTEMPTED){return-1}return g.indexOf(r)-g.indexOf(t)};t.getLevelChange=L;var m=g[g.length-1];t.HAS_FULLY_MASTERED_STATE=m;function h(n){return{lessThan:function e(t,r){return n(t,r)<0},lessThanOrEqual:function e(t,r){return n(t,r)<=0},greaterThan:function e(t,r){return n(t,r)>0},greaterThanOrEqual:function e(t,r){return n(t,r)>=0},equal:function e(t,r){return n(t,r)===0}}}var M=h(function(e,t){return E(e)-E(t)});t.masteryLevelComparer=M;var y=[d.PROFICIENT,d.MASTERED];t.QUIZ_COMPLETE_LEVELS=y;var A=[d.MASTERED];t.TEST_COMPLETE_LEVELS=A;var T=90;t.COURSE_CHALLENGE_COMPLETE_SCORE=T;var I=(o={},l(o,d.UNFAMILIAR,i18n._("Not Started")),l(o,d.ATTEMPTED,i18n._("Attempted")),l(o,d.FAMILIAR,i18n._("Familiar")),l(o,d.PROFICIENT,i18n._("Proficient")),l(o,d.MASTERED,i18n._("Mastered")),o);t.masteryDisplayNames=I;var p=(i={},l(i,d.UNFAMILIAR,"#F7F8FA"),l(i,d.ATTEMPTED,"#EBE4FF"),l(i,d.FAMILIAR,"#CFBCFF"),l(i,d.PROFICIENT,"#AA8DFF"),l(i,d.MASTERED,"#9059FF"),i);t.masteryDisplayColors=p;var C=(s={},l(s,d.UNFAMILIAR,0),l(s,d.ATTEMPTED,0),l(s,d.FAMILIAR,.7),l(s,d.PROFICIENT,1),l(s,d.MASTERED,1),s);t.exerciseMasteryThresholds=C;var F=.9;t.unitMasteryPercentage=F;var P=[{id:d.LEVEL1,title:i18n._("Level 1"),start:0,end:.25},{id:d.LEVEL2,title:i18n._("Level 2"),start:.25,end:.5},{id:d.LEVEL3,title:i18n._("Level 3"),start:.5,end:.75},{id:d.LEVEL4,title:i18n._("Level 4"),start:.75,end:F},{id:d.LEVEL5,title:i18n._("Level 5 (Mastered)"),start:F,end:1},{id:d.LEVEL6,title:i18n._("Level 6"),start:1,end:1}];t.masteryLevelDefinitions=P;var O={unfamiliar:0,attempted:0,familiar:50,proficient:80,mastered:100};t.levelPointsMap=O;function R(r,n){var e=[].concat(P).reverse().find(function(e){var t=n*e.start;return r>=t});return e||P[0]}var N=function e(t,r){return r["e".concat(t.contentId)]||d.UNFAMILIAR};t.getMasteryLevelForExerciseFromMap=N;function x(e,t){var r=R(e,t);var n=P.findIndex(function(e){return e.id===r.id});return P[n+1]||P[P.length-1]}var w=function e(t){return I[t]||i18n._("Unknown")};t.getMasteryDisplay=w;function b(e,t){var r=t===d.UNFAMILIAR||t===d.ATTEMPTED;return r?Math.ceil(e*C[d.FAMILIAR]):e}var D=function e(t){var r=g.indexOf(t);var n=S(t,r);var a=g[g.length-1];return n||a};t.getNextMasteryLevel=D;var k=function e(t,r,n){var a=t===d.PROFICIENT||t===d.MASTERED;if(a){return t}var o=r/n;var i=o>=C[d.PROFICIENT];if(i){return d.PROFICIENT}var s=t===d.FAMILIAR||o>=C[d.FAMILIAR];if(s){return d.FAMILIAR}return d.ATTEMPTED};t.getInProgressMasteryLevel=k;var S=function e(t,r){var n=t===d.UNFAMILIAR?2:1;return g[r+n]};var U=function e(t,r,n){if(t===d.MASTERED){return{inProgressLevel:t,inProgressLeveledUp:false,nextLevelToAttain:t,goalToAttainNextLevel:Math.ceil(C[t]*n)}}var a=k(t,r,n);var o=k(t,r-1,n);var i=g.indexOf(a);var s=S(a,i);return{inProgressLevel:a,inProgressLeveledUp:o!==a,nextLevelToAttain:s,goalToAttainNextLevel:Math.ceil(C[s]*n)}};t.getNextMasteryLevelDetails=U;function V(e,t){if(t.type==="first_x_or_num_correct_in_a_row"){if(t.first<t.numRequired){if(e.length===t.first){if(e.every(function(e){return e.correct})){return t.first}}}}return t.numRequired}var j=function e(t,r){if(r<1){return 0}return Math.min(100,Math.round(100*(t/r)))};t.getRoundedPercent=j;var z=function e(t){return j(t.numCorrect,t.numAttempted)};t.getPercentCorrect=z;var Q=function e(t,r){var n=z(t);var a=r?r(t.completedDate).fromNow():null;return{scoreText:"".concat(n,"%"),dateText:a}};t.getScoreAndDateText=Q;var Y=function e(t,r){if(r<1){return false}var n=R(t,r);return n.id===d.LEVEL5||n.id===d.LEVEL6};t.achievedMastery=Y;var q=function e(t,r){var n=(t.tutorials||[]).reduce(function(e,t){return[].concat(e,t.contentItems)},[]);return n.filter(function(e){return e.kind==="Exercise"}).map(function(e){return r["e"+e.contentId]||d.UNFAMILIAR})};t.getMasteryLevelsForQuizOrTest=q;var B=function e(t){return t.length>0?t.reduce(function(e,t){var r=O[e];var n=O[t];return n<r?t:e},d.MASTERED):d.UNFAMILIAR};t.getMinimumMasteryLevel=B;var H=function e(t,r){return B(q(t,r))};t.getMinimumMasteryLevelForQuizOrTest=H;var W=function e(t,r){var n=H(t,r);return n===d.PROFICIENT||n===d.MASTERED};t.areAllExercisesProficientOrAboveForQuiz=W;var G=function e(t){return t===a.SUBJECT_CHALLENGE_QUIZ_TYPE};t.isCourseChallengeType=G;var J=function e(t){var r=t.type;return G(r)};t.isCourseChallenge=J;var Z=function e(t){return!!t&&z(t)>=T};t.isCourseChallengeComplete=Z;var K=function e(t){var r=t.correct;return r};var X=function e(t){var r=t.correct;return!r};var $=function e(t){return t.filter(K).length};t.getNumCorrect=$;var ee=function e(t){return t.filter(X).length};t.getNumIncorrect=ee;var te=function e(t,r,n){var a=V(t,r);var o=$(t);var i=ee(t);var s=U(n,o,a);var l=true;var u="";var c=false;if(s.nextLevelToAttain===d.MASTERED||s.inProgressLevel===d.PROFICIENT){u=i18n._("Skill is %(level)s!",{level:w(s.inProgressLevel)})}else if(s.inProgressLeveledUp&&s.inProgressLevel===d.FAMILIAR&&n===d.UNFAMILIAR){u=i18n._("Leveled up to %(familiar)s!",{familiar:w(d.FAMILIAR)});c=true}else if(a-i<s.goalToAttainNextLevel){l=false}else{u=i18n._("Get %(goal)s of %(total)s questions to level up to %(nextLevel)s",{goal:s.goalToAttainNextLevel,total:a,nextLevel:w(s.nextLevelToAttain)})}return{showLiveUpdates:l,text:u,levelledUp:c}};t.getLiveMasteryDetails=te;var re=function e(t){return t.reduce(function(e,t){return t.kind==="Exercise"?Object.assign(e,l({},t.progressKey,d.UNFAMILIAR)):e},{})};var ne=function e(t,r,n){var a=.7;if(t===r){return d.PROFICIENT}if(n>a){return d.FAMILIAR}return d.ATTEMPTED};t.getNewLevel=ne;var ae=function e(t){return t.map(function(e){var t=e.contentItems;return re(t)}).reduce(function(e,t){return Object.assign(e,t)},{})};t.getLoggedOutMasteryMap=ae;var oe=function e(t){return t.reduce(function(e,t){return[].concat(e,t.contentItems)},[])};t.getContentItems=oe;var ie=function e(t){return oe(t).filter(function(e){var t=e.kind;return t==="Exercise"})};t.getAllExercises=ie;var se=function e(t,r){return ie(t).filter(function(e){var t=e.contentId;return r["e".concat(t)]==="proficient"})};t.getProficientExercises=se;var le=function e(t,r){return ie(t).filter(function(e){var t=e.contentId;return r["e".concat(t)]==="mastered"})};t.getMasteredExercises=le;var ue=function e(t,r){return ie(t).map(function(e){return r["e".concat(e.contentId)]})};t.getExerciseLevels=ue;var ce=function e(t,r){return ue(t,r).reduce(function(e,t){return e+O[t]},0)};t.getTotalMasteryPointsEarned=ce;var ve=function e(t,r){return ue(t,r).length*O[d.MASTERED]};t.getTotalMasteryPointsAvailable=ve;var fe=function e(t,o,i){var n=function e(t){var r=N(t,o);var n=N(t,i);var a=L(r,n);if(a>0){return"leveledUp"}if(a<0){return"leveledDown"}return"levelMaintained"};return t.reduce(function(e,t){var r=n(t);return u({},e,l({},r,e[r].concat([t])))},{leveledUp:[],leveledDown:[],levelMaintained:[]})};t.getExerciseLevelChanges=fe;var de=function e(t,a,o){return t.reduce(function(e,t){var r=N(t,a);var n=N(t,o);return e+O[n]-O[r]},0)};t.getMasteryPointChange=de;function ge(e,t,r){if(e.pointsAvailable===0){return e}var n=t;var a=u({},t,r);var o=Object.keys(a);if(o.length===0){return e}var i=o.reduce(function(e,t){if(!n[t]){return e}var r=O[a[t]];return e+r},0);var s=e.pointsAvailable;var l=j(i,s);return{percentage:l,pointsEarned:i,pointsAvailable:s}}var Ee={unfamiliar:"#F7F8FA",attempted:"#EBE4FF",familiar:"#CFBCFF",proficient:"#AA8DFF",mastered:"#9059FF"};t.masteryColors=Ee;var Le=[f.ATTEMPTED,f.FAMILIAR,f.PROFICIENT,f.MASTERED,f.UNFAMILIAR];t.masteryLevelOrder=Le}}]);
//# sourceMappingURL=../../sourcemaps/en/20b496c49e4472d13b8334b604cb38f3.b1777e302e6287515f5d.js.map