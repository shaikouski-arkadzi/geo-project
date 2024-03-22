npm i --save-dev eslint eslint-config-prettier prettier eslint-plugin-prettier eslint-plugin-simple-import-sort

### :global

The `:global` operator is used in CSS Modules. Modular CSS uses a CSS Modules compiler to scope CSS styles within their respective modules (e.g., React component).

Here's an example from a React module (in the file ErrorMessaging.less for the ErrorMessaging.jsx React component):

    :global(.ocssContainer) {
      .ui_column {
        padding-left: 0;
      }
    }

This gets compiled into:

      .ErrorMessaging__alertContainer--1I-Cz .ocssContainer .ErrorMessaging__ui_column--3uMUS {
        padding-left: 0;
      }

But now I add a `:global` modifier onto `.ui_column`:

    :global(.ocssContainer) {
      :global(.ui_column) {
        padding-left: 0;
      }
    }

And this is what it compiles to:

      .ErrorMessaging__alertContainer--1I-Cz .ocssContainer .ui_column {
        padding-left: 0;
      }

Now `.ui_column` can apply to any child element with that style, including in a child React component, and not just .ui_column elements that are part of the ErrorMessaging React component.
