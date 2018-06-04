"use strict";

SystemJS.register(["./PraiseButton.js"], function (_export, _context) {
  "use strict";

  var PraiseButton, _createClass, Thumb;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_PraiseButtonJs) {
      PraiseButton = _PraiseButtonJs.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      Thumb = function (_PraiseButton) {
        _inherits(Thumb, _PraiseButton);

        function Thumb(selector) {
          var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref$value = _ref.value,
              value = _ref$value === undefined ? 0 : _ref$value,
              _ref$clicked = _ref.clicked,
              clicked = _ref$clicked === undefined ? false : _ref$clicked,
              onClick = _ref.onClick;

          _classCallCheck(this, Thumb);

          var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

          _this.__onclick = function (e) {
            // if (e.target !== button) return;

            if (_this.onClick) {
              _this.onClick(_this);
            } else {
              if (_this.likeStatus) return;
              _this.like();
            }

            _this.render();
          };

          _this.onClick = onClick;
          _this.value = value;
          _this.likeStatus = clicked;
          _this.selector = typeof selector === "string" ? document.querySelector(selector) : selector;

          if (!_this.selector || _this.selector.nodeType !== 1) throw new Error("selector not found");

          _this.init();
          return _this;
        }

        _createClass(Thumb, [{
          key: "init",
          value: function init() {
            this.render();
            this.selector.addEventListener("click", this.__onclick);
          }
        }, {
          key: "render",
          value: function render() {
            var cls = "";
            // update view
            if (this.likeStatus) {
              cls = "--active";
            } else {
              cls = "--default";
            }
            var html = "<span>" + this.value + "</span><div>\u70B9\u8D5E</div>";
            this.selector.className = cls;
            this.selector.innerHTML = html;
          }
        }, {
          key: "like",
          value: function like() {
            this.value++;
            this.likeStatus = true;
          }
        }, {
          key: "unlike",
          value: function unlike() {
            this.value--;
            this.likeStatus = false;
          }
        }]);

        return Thumb;
      }(PraiseButton);

      _export("default", Thumb);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGh1bWIuanMiXSwibmFtZXMiOlsiUHJhaXNlQnV0dG9uIiwiVGh1bWIiLCJzZWxlY3RvciIsInZhbHVlIiwiY2xpY2tlZCIsIm9uQ2xpY2siLCJfX29uY2xpY2siLCJsaWtlU3RhdHVzIiwibGlrZSIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5vZGVUeXBlIiwiRXJyb3IiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNscyIsImh0bWwiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPQSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWNDLFc7OztBQUNuQix1QkFBWUMsUUFBWixFQUFvRTtBQUFBLHlGQUFKLEVBQUk7QUFBQSxnQ0FBNUNDLEtBQTRDO0FBQUEsY0FBNUNBLEtBQTRDLDhCQUFwQyxDQUFvQztBQUFBLGtDQUFqQ0MsT0FBaUM7QUFBQSxjQUFqQ0EsT0FBaUMsZ0NBQXZCLEtBQXVCO0FBQUEsY0FBaEJDLE9BQWdCLFFBQWhCQSxPQUFnQjs7QUFBQTs7QUFBQTs7QUFBQSxnQkErQnBFQyxTQS9Cb0UsR0ErQnhELGFBQUs7QUFDZjs7QUFFQSxnQkFBSSxNQUFLRCxPQUFULEVBQWtCO0FBQ2hCLG9CQUFLQSxPQUFMO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsa0JBQUksTUFBS0UsVUFBVCxFQUFxQjtBQUNyQixvQkFBS0MsSUFBTDtBQUNEOztBQUVELGtCQUFLQyxNQUFMO0FBQ0QsV0ExQ21FOztBQUVsRSxnQkFBS0osT0FBTCxHQUFlQSxPQUFmO0FBQ0EsZ0JBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGdCQUFLSSxVQUFMLEdBQWtCSCxPQUFsQjtBQUNBLGdCQUFLRixRQUFMLEdBQ0UsT0FBT0EsUUFBUCxLQUFvQixRQUFwQixHQUNJUSxTQUFTQyxhQUFULENBQXVCVCxRQUF2QixDQURKLEdBRUlBLFFBSE47O0FBS0EsY0FBSSxDQUFDLE1BQUtBLFFBQU4sSUFBa0IsTUFBS0EsUUFBTCxDQUFjVSxRQUFkLEtBQTJCLENBQWpELEVBQ0UsTUFBTSxJQUFJQyxLQUFKLENBQVUsb0JBQVYsQ0FBTjs7QUFFRixnQkFBS0MsSUFBTDtBQWJrRTtBQWNuRTs7OztpQ0FDTTtBQUNMLGlCQUFLTCxNQUFMO0FBQ0EsaUJBQUtQLFFBQUwsQ0FBY2EsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsS0FBS1QsU0FBN0M7QUFDRDs7O21DQUNRO0FBQ1AsZ0JBQUlVLE1BQU0sRUFBVjtBQUNBO0FBQ0EsZ0JBQUksS0FBS1QsVUFBVCxFQUFxQjtBQUNuQlMsb0JBQU0sVUFBTjtBQUNELGFBRkQsTUFFTztBQUNMQSxvQkFBTSxXQUFOO0FBQ0Q7QUFDRCxnQkFBSUMsa0JBQWdCLEtBQUtkLEtBQXJCLG1DQUFKO0FBQ0EsaUJBQUtELFFBQUwsQ0FBY2dCLFNBQWQsR0FBMEJGLEdBQTFCO0FBQ0EsaUJBQUtkLFFBQUwsQ0FBY2lCLFNBQWQsR0FBMEJGLElBQTFCO0FBQ0Q7OztpQ0FhTTtBQUNMLGlCQUFLZCxLQUFMO0FBQ0EsaUJBQUtJLFVBQUwsR0FBa0IsSUFBbEI7QUFDRDs7O21DQUNRO0FBQ1AsaUJBQUtKLEtBQUw7QUFDQSxpQkFBS0ksVUFBTCxHQUFrQixLQUFsQjtBQUNEOzs7O1FBbkRnQ1AsWTs7eUJBQWRDLEsiLCJmaWxlIjoiY29tcG9uZW50cy9UaHVtYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmFpc2VCdXR0b24gZnJvbSBcIi4vUHJhaXNlQnV0dG9uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRodW1iIGV4dGVuZHMgUHJhaXNlQnV0dG9uIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHsgdmFsdWUgPSAwLCBjbGlja2VkID0gZmFsc2UsIG9uQ2xpY2sgfSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmxpa2VTdGF0dXMgPSBjbGlja2VkO1xuICAgIHRoaXMuc2VsZWN0b3IgPVxuICAgICAgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgOiBzZWxlY3RvcjtcblxuICAgIGlmICghdGhpcy5zZWxlY3RvciB8fCB0aGlzLnNlbGVjdG9yLm5vZGVUeXBlICE9PSAxKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2VsZWN0b3Igbm90IGZvdW5kXCIpO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX19vbmNsaWNrKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNscyA9IFwiXCI7XG4gICAgLy8gdXBkYXRlIHZpZXdcbiAgICBpZiAodGhpcy5saWtlU3RhdHVzKSB7XG4gICAgICBjbHMgPSBcIi0tYWN0aXZlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNscyA9IFwiLS1kZWZhdWx0XCI7XG4gICAgfVxuICAgIHZhciBodG1sID0gYDxzcGFuPiR7dGhpcy52YWx1ZX08L3NwYW4+PGRpdj7ngrnotZ48L2Rpdj5gO1xuICAgIHRoaXMuc2VsZWN0b3IuY2xhc3NOYW1lID0gY2xzO1xuICAgIHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MID0gaHRtbDtcbiAgfVxuICBfX29uY2xpY2sgPSBlID0+IHtcbiAgICAvLyBpZiAoZS50YXJnZXQgIT09IGJ1dHRvbikgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMub25DbGljaykge1xuICAgICAgdGhpcy5vbkNsaWNrKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5saWtlU3RhdHVzKSByZXR1cm47XG4gICAgICB0aGlzLmxpa2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9O1xuICBsaWtlKCkge1xuICAgIHRoaXMudmFsdWUrKztcbiAgICB0aGlzLmxpa2VTdGF0dXMgPSB0cnVlO1xuICB9XG4gIHVubGlrZSgpIHtcbiAgICB0aGlzLnZhbHVlLS07XG4gICAgdGhpcy5saWtlU3RhdHVzID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==