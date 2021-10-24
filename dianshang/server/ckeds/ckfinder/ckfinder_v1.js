﻿/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function() {
    window.CKFinder = function(a, b, c, d) {
        var e = this;
        e.BasePath = a || CKFinder.DEFAULT_BASEPATH;
        e.Width = b || '100%';
        e.Height = c || 400;
        e.SelectFunction = d || null;
        e.SelectFunctionData = null;
        e.SelectThumbnailFunction = d || null;
        e.SelectThumbnailFunctionData = null;
        e.DisableThumbnailSelection = false;
        e.ClassName = 'CKFinderFrame';
        e.StartupPath = null;
        e.StartupFolderExpanded = false;
        e.RememberLastFolder = true;
        e.ResourceType = null;
        e.Id = null;
        e.Skin = null;
    };
    CKFinder.DEFAULT_BASEPATH = '/ckfinder/';
    CKFinder.ConnectorLanguage = 'php';
    CKFinder._ = {
        instanceConfig: []
    }; (function() {
        function a(b) {
            var c = 1;
            while (CKFinder._.instanceConfig[c]) c++;
            CKFinder._.instanceConfig[c] = b;
            return c;
        };
        CKFinder.prototype = {
            Create: function() {
                document.write(this.CreateHtml());
            },
            CreateHtml: function() {
                var d = this;
                var b = d.ClassName;
                if (b && b.length > 0) b = ' class="' + b + '"';
                var c = d.Id;
                if (c && c.length > 0) c = ' id="' + c + '"';
                return '<iframe src="' + d._BuildUrl() + '" width="' + d.Width + '" ' + 'height="' + d.Height + '"' + b + c + ' frameborder="0" scrolling="no"></iframe>';
            },
            Popup: function(b, c) {
                b = b || '80%';
                c = c || '70%';
                if (typeof b == 'string' && b.length > 1 && b.substr(b.length - 1, 1) == '%') b = parseInt(window.screen.width * parseInt(b, 10) / 100, 10);
                if (typeof c == 'string' && c.length > 1 && c.substr(c.length - 1, 1) == '%') c = parseInt(window.screen.height * parseInt(c, 10) / 100, 10);
                if (b < 200) b = 200;
                if (c < 200) c = 200;
                var d = parseInt((window.screen.height - c) / 2, 10),
                e = parseInt((window.screen.width - b) / 2, 10),
                f = 'location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,width=' + b + ',height=' + c + ',top=' + d + ',left=' + e,
                g = window.open('', 'CKFinderPopup', f, true);
                if (!g) return false;
                var h = this._BuildUrl().replace(/&amp;/g, '&');
                try {
                    g.moveTo(e, d);
                    g.resizeTo(b, c);
                    g.focus();
                    g.location.href = h;
                } catch(i) {
                    g = window.open(h, 'CKFinderPopup', f, true);
                }
                return true;
            },
            _BuildUrl: function(b) {
                var e = this;
                b = b || e.BasePath;
                var c = '';
                if (!b || b.length === 0) b = CKFinder.DEFAULT_BASEPATH;
                if (b.substr(b.length - 1, 1) != '/') b += '/';
                b += 'ckfinder.html';
                var d;
                if (e.SelectFunction) {
                    d = e.SelectFunction;
                    if (typeof d == 'function') d = d.toString().match(/function ([^(]+)/)[1];
                    c += '?action=js&amp;func=' + d;
                }
                if (e.Skin) {
                    c += c ? '&amp;': '?';
                    c += 'skin=' + encodeURIComponent(e.Skin);
                }
                if (e.SelectFunctionData) {
                    c += c ? '&amp;': '?';
                    c += 'data=' + encodeURIComponent(e.SelectFunctionData);
                }
                if (e.ResourceType) {
                    c += c ? '&amp;': '?';
                    c += 'type=' + encodeURIComponent(e.ResourceType);
                }
                if (e.DisableThumbnailSelection) {
                    c += c ? '&amp;': '?';
                    c += 'dts=1';
                } else if (e.SelectThumbnailFunction || e.SelectFunction) {
                    d = e.SelectThumbnailFunction || e.SelectFunction;
                    if (typeof d == 'function') d = d.toString().match(/function ([^(]+)/)[1];
                    c += c ? '&amp;': '?';
                    c += 'thumbFunc=' + d;
                    if (e.SelectThumbnailFunctionData) c += '&amp;tdata=' + encodeURIComponent(e.SelectThumbnailFunctionData);
                    else if (!e.SelectThumbnailFunction && e.SelectFunctionData) c += '&amp;tdata=' + encodeURIComponent(e.SelectFunctionData);
                }
                if (e.StartupPath) {
                    c += c ? '&amp;': '?';
                    c += 'start=' + encodeURIComponent(e.StartupPath + (e.StartupFolderExpanded ? ':1': ':0'));
                }
                if (e.RememberLastFolder !== undefined && !e.RememberLastFolder) {
                    c += c ? '&amp;': '?';
                    c += 'rlf=0';
                }
                if (e.Id) {
                    c += c ? '&amp;': '?';
                    c += 'id=' + encodeURIComponent(e.Id);
                }
                return b + c;
            }
        };
        CKFinder.Create = function(b, c, d, e) {
            var f;
            if (b !== null && typeof b == 'object') {
                f = new CKFinder();
                for (var g in b) f[g] = b[g];
            } else f = new CKFinder(b, c, d, e);
            f.Create();
        };
        CKFinder.Popup = function(b, c, d, e) {
            var f, g;
            if (b !== null && typeof b == 'object') {
                g = a(b);
                f = new CKFinder();
                for (var h in b) f[h] = b[h];
            } else f = new CKFinder(b, c, d, e);
            f.Popup(c, d);
        };
        CKFinder.SetupFCKeditor = function(b, c, d, e) {
            var f, g;
            if (c !== null && typeof c == 'object') {
                g = a(c);
                f = new CKFinder();
                for (var h in c) {
                    f[h] = c[h];
                    if (h == 'Width') {
                        var i = f[h] || 800;
                        if (typeof i == 'string' && i.length > 1 && i.substr(i.length - 1, 1) == '%') i = parseInt(window.screen.width * parseInt(i, 10) / 100, 10);
                        b.Config.LinkBrowserWindowWidth = i;
                        b.Config.ImageBrowserWindowWidth = i;
                        b.Config.FlashBrowserWindowWidth = i;
                    } else if (h == 'Height') {
                        var j = f[h] || 600;
                        if (typeof j == 'string' && j.length > 1 && j.substr(j.length - 1, 1) == '%') j = parseInt(window.screen.height * parseInt(j, 10) / 100, 10);
                        b.Config.LinkBrowserWindowHeight = j;
                        b.Config.ImageBrowserWindowHeight = j;
                        b.Config.FlashBrowserWindowHeight = j;
                    }
                }
            } else f = new CKFinder(c);
            var k = f.BasePath;
            if (k.substr(0, 1) != '/' && k.indexOf('://') == -1) k = document.location.pathname.substring(0, document.location.pathname.lastIndexOf('/') + 1) + k;
            k = f._BuildUrl(k);
            var l = k.indexOf('?') !== -1 ? '&': '?';
            if (g) {
                k += l + 'configId=' + g;
                l = '&';
            }
            b.Config.LinkBrowserURL = k;
            b.Config.ImageBrowserURL = k + l + 'type=' + (d || 'Images');
            b.Config.FlashBrowserURL = k + l + 'type=' + (e || 'Flash');
            var m = k.substring(0, 1 + k.lastIndexOf('/'));
            b.Config.LinkUploadURL = m + 'core/connector/' + CKFinder.ConnectorLanguage + '/connector.' + CKFinder.ConnectorLanguage + '?command=QuickUpload&type=Files';
            b.Config.ImageUploadURL = m + 'core/connector/' + CKFinder.ConnectorLanguage + '/connector.' + CKFinder.ConnectorLanguage + '?command=QuickUpload&type=' + (d || 'Images');
            b.Config.FlashUploadURL = m + 'core/connector/' + CKFinder.ConnectorLanguage + '/connector.' + CKFinder.ConnectorLanguage + '?command=QuickUpload&type=' + (e || 'Flash');
        };
        CKFinder.SetupCKEditor = function(b, c, d, e) {
            if (b === null) {
                for (var f in CKEDITOR.instances) CKFinder.SetupCKEditor(CKEDITOR.instances[f], c, d, e);
                CKEDITOR.on('instanceCreated',
                function(o) {
                    CKFinder.SetupCKEditor(o.editor, c, d, e);
                });
                return;
            }
            var g, h;
            if (c !== null && typeof c == 'object') {
                h = a(c);
                g = new CKFinder();
                for (var i in c) {
                    g[i] = c[i];
                    if (i == 'Width') {
                        var j = g[i] || 800;
                        if (typeof j == 'string' && j.length > 1 && j.substr(j.length - 1, 1) == '%') j = parseInt(window.screen.width * parseInt(j, 10) / 100, 10);
                        b.config.filebrowserWindowWidth = j;
                    } else if (i == 'Height') {
                        var k = g[i] || 600;
                        if (typeof k == 'string' && k.length > 1 && k.substr(k.length - 1, 1) == '%') k = parseInt(window.screen.height * parseInt(k, 10) / 100, 10);
                        b.config.filebrowserWindowHeight = k;
                    }
                }
            } else g = new CKFinder(c);
            var l = g.BasePath;
            if (l.substr(0, 1) != '/' && l.indexOf('://') == -1) l = document.location.pathname.substring(0, document.location.pathname.lastIndexOf('/') + 1) + l;
            l = g._BuildUrl(l);
            var m = l.indexOf('?') !== -1 ? '&': '?';
            if (h) {
                l += m + 'configId=' + h;
                m = '&';
            }
            b.config.filebrowserBrowseUrl = l;
            b.config.filebrowserImageBrowseUrl = l + m + 'type=' + (d || 'Images');
            b.config.filebrowserFlashBrowseUrl = l + m + 'type=' + (e || 'Flash');
            var n = l.substring(0, 1 + l.lastIndexOf('/'));
            b.config.filebrowserUploadUrl = n + 'core/connector/' + CKFinder.ConnectorLanguage + '/connector.' + CKFinder.ConnectorLanguage + '?command=QuickUpload&type=Files';
            b.config.filebrowserImageUploadUrl = n + 'core/connector/' + CKFinder.ConnectorLanguage + '/connector.' + CKFinder.ConnectorLanguage + '?command=QuickUpload&type=' + (d || 'Images');
            b.config.filebrowserFlashUploadUrl = n + 'core/connector/' + CKFinder.ConnectorLanguage + '/connector.' + CKFinder.ConnectorLanguage + '?command=QuickUpload&type=' + (e || 'Flash');
        };
    })();
})();