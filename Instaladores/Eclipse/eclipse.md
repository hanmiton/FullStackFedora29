Descargar de la pagina dbeaver
	https://www.eclipse.org/downloads/packages/
Descomprimimos movemos to /opt
	sudo mv eclipse-jee-2019-03-R-linux-gtk-x86_64 /opt/
/opt/eclipse
	ejecutamos ./eclipse
/home/chilli/.local/share/applications
	eclipse.desktop
sudo nano eclipse.desktop
	Configuracion de ejecutable
		[Desktop Entry]
		Name=Eclipse
		GenericName=Eclipse
		X-GNOME-FullName=Eclipse
		Comment=Eclipse IDE
		Keywords=eclipse;
		Exec=/opt/eclipse/eclipse
		Terminal=false
		Type=Application
		Icon=/opt/eclipse/icon.xpm
		Categories=Development;Utilities;
