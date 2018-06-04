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
            this.value = this.increase(this.value);
            this.likeStatus = true;
          }
        }, {
          key: "unlike",
          value: function unlike() {
            this.value = this.decrease(this.value);
            this.likeStatus = false;
          }
        }]);

        return Thumb;
      }(PraiseButton);

      _export("default", Thumb);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGh1bWIuanMiXSwibmFtZXMiOlsiUHJhaXNlQnV0dG9uIiwiVGh1bWIiLCJzZWxlY3RvciIsInZhbHVlIiwiY2xpY2tlZCIsIm9uQ2xpY2siLCJfX29uY2xpY2siLCJsaWtlU3RhdHVzIiwibGlrZSIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5vZGVUeXBlIiwiRXJyb3IiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNscyIsImh0bWwiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJpbmNyZWFzZSIsImRlY3JlYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBT0Esa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVjQyxXOzs7QUFDbkIsdUJBQVlDLFFBQVosRUFBb0U7QUFBQSx5RkFBSixFQUFJO0FBQUEsZ0NBQTVDQyxLQUE0QztBQUFBLGNBQTVDQSxLQUE0Qyw4QkFBcEMsQ0FBb0M7QUFBQSxrQ0FBakNDLE9BQWlDO0FBQUEsY0FBakNBLE9BQWlDLGdDQUF2QixLQUF1QjtBQUFBLGNBQWhCQyxPQUFnQixRQUFoQkEsT0FBZ0I7O0FBQUE7O0FBQUE7O0FBQUEsZ0JBK0JwRUMsU0EvQm9FLEdBK0J4RCxhQUFLO0FBQ2Y7O0FBRUEsZ0JBQUksTUFBS0QsT0FBVCxFQUFrQjtBQUNoQixvQkFBS0EsT0FBTDtBQUNELGFBRkQsTUFFTztBQUNMLGtCQUFJLE1BQUtFLFVBQVQsRUFBcUI7QUFDckIsb0JBQUtDLElBQUw7QUFDRDs7QUFFRCxrQkFBS0MsTUFBTDtBQUNELFdBMUNtRTs7QUFFbEUsZ0JBQUtKLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGdCQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxnQkFBS0ksVUFBTCxHQUFrQkgsT0FBbEI7QUFDQSxnQkFBS0YsUUFBTCxHQUNFLE9BQU9BLFFBQVAsS0FBb0IsUUFBcEIsR0FDSVEsU0FBU0MsYUFBVCxDQUF1QlQsUUFBdkIsQ0FESixHQUVJQSxRQUhOOztBQUtBLGNBQUksQ0FBQyxNQUFLQSxRQUFOLElBQWtCLE1BQUtBLFFBQUwsQ0FBY1UsUUFBZCxLQUEyQixDQUFqRCxFQUNFLE1BQU0sSUFBSUMsS0FBSixDQUFVLG9CQUFWLENBQU47O0FBRUYsZ0JBQUtDLElBQUw7QUFia0U7QUFjbkU7Ozs7aUNBQ007QUFDTCxpQkFBS0wsTUFBTDtBQUNBLGlCQUFLUCxRQUFMLENBQWNhLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLEtBQUtULFNBQTdDO0FBQ0Q7OzttQ0FDUTtBQUNQLGdCQUFJVSxNQUFNLEVBQVY7QUFDQTtBQUNBLGdCQUFJLEtBQUtULFVBQVQsRUFBcUI7QUFDbkJTLG9CQUFNLFVBQU47QUFDRCxhQUZELE1BRU87QUFDTEEsb0JBQU0sV0FBTjtBQUNEO0FBQ0QsZ0JBQUlDLGtCQUFnQixLQUFLZCxLQUFyQixtQ0FBSjtBQUNBLGlCQUFLRCxRQUFMLENBQWNnQixTQUFkLEdBQTBCRixHQUExQjtBQUNBLGlCQUFLZCxRQUFMLENBQWNpQixTQUFkLEdBQTBCRixJQUExQjtBQUNEOzs7aUNBYU07QUFDTCxpQkFBS2QsS0FBTCxHQUFhLEtBQUtpQixRQUFMLENBQWMsS0FBS2pCLEtBQW5CLENBQWI7QUFDQSxpQkFBS0ksVUFBTCxHQUFrQixJQUFsQjtBQUNEOzs7bUNBQ1E7QUFDUCxpQkFBS0osS0FBTCxHQUFhLEtBQUtrQixRQUFMLENBQWMsS0FBS2xCLEtBQW5CLENBQWI7QUFDQSxpQkFBS0ksVUFBTCxHQUFrQixLQUFsQjtBQUNEOzs7O1FBbkRnQ1AsWTs7eUJBQWRDLEsiLCJmaWxlIjoiY29tcG9uZW50cy9UaHVtYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmFpc2VCdXR0b24gZnJvbSBcIi4vUHJhaXNlQnV0dG9uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRodW1iIGV4dGVuZHMgUHJhaXNlQnV0dG9uIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHsgdmFsdWUgPSAwLCBjbGlja2VkID0gZmFsc2UsIG9uQ2xpY2sgfSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmxpa2VTdGF0dXMgPSBjbGlja2VkO1xuICAgIHRoaXMuc2VsZWN0b3IgPVxuICAgICAgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgOiBzZWxlY3RvcjtcblxuICAgIGlmICghdGhpcy5zZWxlY3RvciB8fCB0aGlzLnNlbGVjdG9yLm5vZGVUeXBlICE9PSAxKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2VsZWN0b3Igbm90IGZvdW5kXCIpO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX19vbmNsaWNrKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNscyA9IFwiXCI7XG4gICAgLy8gdXBkYXRlIHZpZXdcbiAgICBpZiAodGhpcy5saWtlU3RhdHVzKSB7XG4gICAgICBjbHMgPSBcIi0tYWN0aXZlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNscyA9IFwiLS1kZWZhdWx0XCI7XG4gICAgfVxuICAgIHZhciBodG1sID0gYDxzcGFuPiR7dGhpcy52YWx1ZX08L3NwYW4+PGRpdj7ngrnotZ48L2Rpdj5gO1xuICAgIHRoaXMuc2VsZWN0b3IuY2xhc3NOYW1lID0gY2xzO1xuICAgIHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MID0gaHRtbDtcbiAgfVxuICBfX29uY2xpY2sgPSBlID0+IHtcbiAgICAvLyBpZiAoZS50YXJnZXQgIT09IGJ1dHRvbikgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMub25DbGljaykge1xuICAgICAgdGhpcy5vbkNsaWNrKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5saWtlU3RhdHVzKSByZXR1cm47XG4gICAgICB0aGlzLmxpa2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9O1xuICBsaWtlKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmluY3JlYXNlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMubGlrZVN0YXR1cyA9IHRydWU7XG4gIH1cbiAgdW5saWtlKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmRlY3JlYXNlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMubGlrZVN0YXR1cyA9IGZhbHNlO1xuICB9XG59XG4iXX0=