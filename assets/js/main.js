$(document).ready(function () {
    TweenMax.to("header", 0, {opacity: 0});
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        TweenMax.to("header", 0.3, {opacity: (scrolled > $(window).height() ? 1 : 0)});

    });

    TweenMax.to("#w1_1_", 1.0, {ease: Expo.easeIn, delay: 0, attr: {y: 200}});
    TweenMax.to("#w2_1_", 0.3, {ease: Expo.easeOut, delay: 1, attr: {y: 250}});
    TweenMax.to("#w3_1_", 0.3, {ease: Expo.easeIn, delay: 1, attr: {y: 200}});
    TweenMax.to("#w4_1_", 0.3, {ease: Expo.easeOut, delay: 1.3, attr: {y: 250}});
    TweenMax.to("#w5_1_", 1.0, {ease: Expo.easeIn, delay: 0.5, attr: {y: 200}});
    TweenMax.to("#w6_1_", 0.3, {ease: Expo.easeOut, delay: 1.5, attr: {y: 250}});
    TweenMax.to("#w7_1_", 0.3, {ease: Expo.easeIn, delay: 1.5, attr: {y: 200}});
    TweenMax.to("#w8_1_", 0.3, {ease: Expo.easeOut, delay: 1.8, attr: {y: 250}});
    TweenMax.to("#w9_1_", 1.0, {ease: Expo.easeIn, delay: 1, attr: {y: 200}});
    TweenMax.to("#w10_1_", 0.3, {ease: Expo.easeOut, delay: 2, attr: {y: 250}});
    TweenMax.to("#w11_1_", 0.3, {ease: Expo.easeIn, delay: 2, attr: {y: 200}});
    TweenMax.to("#w12_1_", 1.0, {ease: Expo.easeOut, delay: 2.3, attr: {y: 250}});

    TweenMax.to("#tekst_1_", 3, {opacity: 1, ease: Elastic.easeOut.config(1, 0.3), delay: 2.6, attr: {transform: "translate(0,0)"}});
    TweenMax.to("#graph-theory", 3, {opacity: 1, ease: Power3.easeIn, delay: 3});
    TweenMax.to("panel content subtitle",0.5, {opacity: 1, ease: Power3.easeIn, delay: 2.5});
    TweenMax.to("panel content div, panel content a",0.5, {opacity: 1, ease: Power3.easeIn, delay: 2.8});
    TweenMax.to("panel content a",0.5, {opacity: 1, ease: Power3.easeIn, delay: 3});

    //slackChatOptions = {
    //    user: 'test',
    //    userLink: 'http://www.google.com',
    //    userId: 'TEST-USER',
    //    userImg: '/img/user-icon-small.jpg',
    //    sysImg: '/img/improvi.png',
    //    sysUser: 'Reinier',
    //    botUser: 'Website',
    //    elementToDisable: $('.message-box'),
    //    disableIfAway: false,
    //    webCache: true,
    //    debug:false,
    //    privateChannel: false,
    //    badgeElement: '.slack-message-count',
    //};
    //
    //$('.message-box').slackChat(slackChatOptions);

});

/* jshint ignore:start */
(function () {
    function B() {
        var a, d, b, c;
        n = $(window).scrollTop();
        for (d = h.length - 1; -1 < d; d--)a = h[d], a = n - a.px, !b && 0 < a && (b = d);
        b || (b = 0);
        a = h[b];
        d = h[b + 1];
        b === h.length - 1 ? (b = a.color, o = a = a.dots) : (b = [], c = (n - a.px) / (d.px - a.px), b[0] = Math.floor((d.color[0] - a.color[0]) * c + a.color[0]), b[1] = Math.floor((d.color[1] - a.color[1]) * c + a.color[1]), b[2] = Math.floor((d.color[2] - a.color[2]) * c + a.color[2]), o = a = (d.dots - a.dots) * c + a.dots);
        q.css({opacity: a})
    }

    function N() {
        var a = q[0].getContext("2d");
        a.fillStyle = "#000";
        a.fillStyle = "#3369ab";
        a.clearRect(0, 0, i, l);
        for (var d = 0; d < i; d += 24)for (var b = 0; b < l; b += 24)a.fillRect(d, b, 1, 1)
    }

    function C() {
        i = window.innerWidth;
        l = window.innerHeight;
        _.extend(u, {width: i, height: l});
        _.extend(q[0], {width: i, height: l});
        N();
        c.fillStyle = r;
        c.strokeStyle = r;
        c.lineWidth = 1;
        v = [];
        D.each(function () {
            var a = $(this);
            v.push({top: a.position().top, height: a.height()})
        });
        var a, d;
        _.each(h, function (b) {
            d = Math.floor(b.stop);
            a = v[d];
            b.px = (b.stop - d) * a.height + a.top
        })
    }

    function O(a, d, b, c) {
        c = P[c];
        a = {x: a, y: d, r: b, points: [], gradient: c};
        for (d = 0; 4 > d; d++)a.points.push({x: 0, y: 0, v: 0, a: 2 * Math.random() * Math.PI, siblings: []});
        for (var d = a.points, f, i = d.length, e, k, j, b = 0; b < i; b++) {
            f = d[b];
            j = [];
            for (c = 0; c < i; c++)if (e = d[c], e !== f && !_.contains(f.siblings, e) && (k = Math.abs(e.x - f.x) + Math.abs(e.y - f.y), 2 > j.length || j[1].distance > k))k = {
                distance: k,
                vertex: e
            }, e = _.sortedIndex(j, k, "distance"), j.splice(e, 0, k), j = j.slice(0, 2);
            for (c = 0; c < j.length; c++)f.siblings.push(j[c].vertex), j[c].vertex.siblings.push(f)
        }
        return a
    }

    function Q() {
        var a,
            d, b, g, f = i / 2, h = l / 2;
        c.fillStyle = r;
        c.strokeStyle = r;
        c.lineWidth = 1;
        w = new Date - 0;
        for (a = 0; 2 > a; a++)for (d = 0; 3 > d; d++)b = a * (f + 150) + (f - 500) * Math.random() + 150, g = d * h + (h - 300) * Math.random() + 150, s.push(O(b, g, 150, a));
        for (a = 0; a < x; a++)y.push({
            id: R++,
            x: Math.random() * i,
            y: Math.random() * l,
            vX: 0,
            vY: 0,
            type: S,
            siblings: [],
            alpha: 1,
            drawn: !1
        })
    }

    function z(a, c, b) {
        a > b ? a = b : a < c && (a = c);
        return a
    }

    function E() {
        var a, d, b, g, f, h = new Date - 0, e, k = -0.1 * n;
        c.clearRect(0, 0, i, l);
        for (d = 0; d < F; d++) {
            e = s[d];
            a = c.createLinearGradient(e.x - e.r, e.y - e.r, e.x + e.r,
                e.y + e.r);
            for (b = 0; b < e.gradient.length; b++)a.addColorStop(e.gradient[b].p, e.gradient[b].c);
            c.strokeStyle = a;
            for (b = 0; b < e.points.length; b++) {
                a = e.points[b];
                for (g = 0; g < a.siblings.length; g++)if (f = a.siblings[g], !f.drawn)c.globalAlpha = o, c.beginPath(), c.moveTo(a.x, a.y + k), c.lineTo(f.x, f.y + k), c.closePath(), c.stroke();
                a.drawn = !0
            }
            for (b = 0; b < e.points.length; b++)a = e.points[b], a.v = z(a.v + (Math.random() - 0.5) * T, -G, G), a.v = 0, g = 1 + Math.min(m, 20), a.a = (a.a + a.v * g) % (2 * Math.PI), a.x = e.x + Math.sin(a.a) * e.r, a.y = e.y + Math.cos(a.a) * e.r
        }
        c.strokeStyle =
            "#fff";
        for (d = 0; d < x; d++) {
            a = y[d];
            for (g = 0; g < a.siblings.length; g++)if (f = a.siblings[g], !f.drawn)b = Math.min(a.alpha, f.alpha), c.globalAlpha = b, c.beginPath(), c.moveTo(a.x, a.y), c.lineTo(f.x, f.y), c.closePath(), c.stroke();
            c.globalAlpha = a.alpha * (1 - o);
            a.type === U ? (c.beginPath(), c.arc(a.x, a.y, 4.5, 0, H, !0), c.closePath(), c.stroke(), c.save(), c.restore()) : (c.beginPath(), c.arc(a.x, a.y, 1.5, 0, H), c.closePath(), c.fill());
            a.vX = z(a.vX + Math.random() * A - I, -t, t);
            a.vY = z(a.vY + Math.random() * A - I, -t, t);
            Math.min(m, 20);
            a.x += a.vX + a.vX *
            m;
            a.y += a.vY + a.vY * m;
            a.drawn = !0
        }
        for (b = 0; b < x; b++)y[b].drawn = !1;
        for (d = 0; d < F; d++)for (b = 0; b < s[d].points.length; b++)s[d].points[b].drawn = !1;
        h - w > V && (w = h);
        window.requestAnimationFrame(E)
    }

    function J(a) {
        m = Math.abs("deltaY"in a ? a.deltaY : a.detail)
    }

    var l, i, q, p, u, c, K, L, M, r = "#48ada6", D, v, o, n, h = [{stop: 0, color: [22, 41, 63], dots: 1}, {
            stop: 0.9,
            color: [22, 41, 63],
            dots: 1
        }, {stop: 1, color: [19, 34, 52], dots: 0}, {stop: 2, color: [19, 34, 52], dots: 0}, {
            stop: 2.1,
            color: [37, 58, 82],
            dots: 1
        }], R = 1, U = 1, S = 2, x = 50, F = 6, s = [], y = [], H = 2 * Math.PI, A = 0.1, I = A / 2,
        t = 0.2, T = 1.0E-4, G = 0.002, V = 200, w, P = [[{c: "#2e90d2", p: 0}, {
            c: "#00c0c8",
            p: 0.47
        }, {c: "#4baca4", p: 1}], [{c: "#dd03ac", p: 0}, {c: "#db9212", p: 1}]], m = 0;
    $(function () {
        K = $("video");
        $("arrows");
        p = $("#graph-theory");
        M = $(".map");
        D = $("panel");
        q = $("#the-dots");
        u = p[0];
        c = u.getContext("2d");
        C();
        B();
        Q();
        (L = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || K.show();
        $(window).on("resize", _.throttle(C, 100));
        if (L)p.css("opacity", 1), M.removeClass("hidden"); else $(window).on("scroll", B);
        var a;
        _.has(document, "ontouchstart") || (a = _.has(document, "onwheel") ? "wheel" : _.has(document, "onmousewheel") ? "mousewheel" : "DOMMouseScroll", window.addEventListener ? window.addEventListener(a, J) : window["on" + a] = J);
        _.delay(function () {
            $(".panel-splash.hide").removeClass("hide")
        }, 500);
        window.requestAnimationFrame(E)
    })
}).call(this);
/* jshint ignore:end */