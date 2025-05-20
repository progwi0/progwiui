## What is progwiUI?

progwiUI is a simple toolkit made on JavaScript.

If you think progwiUI is only for websites - you are wrong!

progwiUI is also for desktop! Try!

### Project "structure"

The best "structure" for progwiUI project is:
```
  <body />
  <script src="./progwiui.js"></script>
  <script>
	  // Here's your code...
  </script>
```
But other structures are not prohibited either. So experiment!

### progwiButton

`progwiButton` is a button widget in progwiUI.

Usage:
```
let progwiui = new progwiUI("Test");
let button = progwiui.progwiButton(label, fontsize, cursor, x, y, width, height, command);
```

The `progwiButton` is suitable for use in interactive projects where control is needed: web and mobile applications, games etc.

### progwiEntry

`progwiEntry` is a entry widget in progwiUI.

Usage:
```
let progwiui = new progwiUI("Test");
let entry = progwiui.progwiEntry(placeholder, x, y);
```

The `progwiEntry` is suitable for projects that require text input from user: forms, search lines, etc.

### progwiLabel

`progwiLabel` is a label widget in progwiUI.

Usage:
```
let progwiui = new progwiUI("Test");
let label = progwiui.progwiLabel("Label.", 0, 0);
```

The `progwiLabel` is suitable for projects where text information is required: web and mobile applications, games etc. (like `progwiButton`)

### progwiCheckbox

`progwiCheckbox` is a checkbox widget in progwiUI.

Usage:
```
let progwiui = new progwiUI("Test");
let checkbox = progwiui.progwiCheckbox("0", "0");
```

The `progwiCheckbox` is suitable for use in projects where is necessary to provide the user the ability to toggle options: forms, settings, control panels etc.

### progwiSpace

`progwiSpace` is a `br`-like widget in progwiUI.

Usage:
```
let progwiui = new progwiUI("Test");
let space = progwiui.progwiSpace();
```

### How to make a real application on progwiUI?

You can create a real application with progwiUI via [pywebview](https://pywebview.flowrl.com/) or [GTK](https://www.gtk.org/)+[WebkitGTK](https://www.webkitgtk.org/).

#### via [pywebview](https://pywebview.flowrl.com/):
```
import webview
webview.create_window('Test', 'https://progwi0.github.io/progwiui')
webview.start()
```

or:

```
import webview

app = '''
	<body />
		<script src="./progwiui.js"></script>
		<script>
			let progwiui = new progwiUI("ProgwiUI Test Page.");
			let button = progwiui.progwiButton("Button.", "14px", "pointer", "500", "500", "50", "50", null);
			let entry = progwiui.progwiEntry("Entry.", "80", "0", null);
			let space = progwiui.progwiSpace();
			let label = progwiui.progwiLabel("Label.", "70", "0");
			let space2 = progwiui.progwiSpace();
			let checkbox = progwiui.progwiCheckbox("0", "0");
			let label2 = progwiui.progwiLabel("Label 2.", "0", "0");
		</script>
'''

webview.create_window('Test', html=app)
webview.start()
```

#### via [WebkitGTK](https://www.webkitgtk.org/):

```python
import gi
gi.require_version("Gtk", "3.0")
gi.require_version("WebKit2", "4.1")
from gi.repository import Gtk, WebKit2

app = Gtk.Window(title = "Test")
app.set_default_size(1280, 960)
ui = Gtk.ScrolledWindow()

webview = WebKit2.WebView()
webview.load_uri("https://progwi0.github.io/progwiui")

ui.add(webview)

app.add(ui)

app.connect("destroy", Gtk.main_quit)
app.show_all()

Gtk.main()
```

You can build your application via [pyinstaller](https://pypi.org/project/pyinstaller/) or [nuitka](https://nuitka.net/).
