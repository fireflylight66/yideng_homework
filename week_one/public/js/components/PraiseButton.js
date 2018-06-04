"use strict";

SystemJS.register([], function (_export, _context) {
  "use strict";

  var _createClass, PraiseButton;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
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

      PraiseButton = function () {
        function PraiseButton() {
          _classCallCheck(this, PraiseButton);
        }

        _createClass(PraiseButton, [{
          key: "increase",
          value: function increase(value) {
            return value + 1;
          }
        }, {
          key: "decrease",
          value: function decrease(value) {
            return value - 1;
          }
        }]);

        return PraiseButton;
      }();

      _export("default", PraiseButton);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJhaXNlQnV0dG9uLmpzIl0sIm5hbWVzIjpbIlByYWlzZUJ1dHRvbiIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU1BLGtCOzs7Ozs7O21DQUNLQyxLLEVBQU87QUFDZCxtQkFBT0EsUUFBUSxDQUFmO0FBQ0Q7OzttQ0FDUUEsSyxFQUFPO0FBQ2QsbUJBQU9BLFFBQVEsQ0FBZjtBQUNEOzs7Ozs7eUJBR1lELFkiLCJmaWxlIjoiY29tcG9uZW50cy9QcmFpc2VCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmFpc2VCdXR0b24ge1xuICBpbmNyZWFzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSArIDE7XG4gIH1cbiAgZGVjcmVhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgLSAxO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByYWlzZUJ1dHRvbjtcbiJdfQ==