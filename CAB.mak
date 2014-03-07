!IFNDEF MSI_CILJNI_PAKET
!ERROR Spremenljivka MSI_CILJNI_PAKET ni definirana!
!ENDIF

!IFNDEF MSI_IZVORNI_PAKET
!ERROR Spremenljivka MSI_IZVORNI_PAKET ni definirana!
!ENDIF

!IFNDEF MSI_DATOTEKA_INF
!ERROR Spremenljivka MSI_DATOTEKA_INF ni definirana!
!ENDIF

!IFDEF MSI_DATOTEKA_CAB
MSI_NASTAVI_CAB_STIKALA=/V
!ELSE
MSI_NASTAVI_CAB_STIKALA=
!ENDIF

!IFNDEF MSIBUILD_VENDOR_URL
!ERROR Spremenljivka MSIBUILD_VENDOR_URL ni definirana!
!ENDIF

!IFNDEF MSIBUILD_PRODUCT_NAME
!ERROR Spremenljivka MSIBUILD_PRODUCT_NAME ni definirana!
!ENDIF

!IFNDEF IMENIK_ASKUPNO
IMENIK_ASKUPNO=C:\Inetpub\spletne-skripte\ASkupno
!ENDIF


Vse : \
	"$(MSI_CILJNI_PAKET)"

"$(MSI_CILJNI_PAKET)" : \
	"$(MSI_IZVORNI_PAKET)" \
!IFDEF MSI_DATOTEKA_CAB
	"$(MSI_DATOTEKA_CAB)" \
!ENDIF
	"$(MSI_DATOTEKA_INF)"
	-if exist $@ del /f /q $@
	copy /y "$(MSI_IZVORNI_PAKET)" "$(@:"=).tmp" > NUL
	cscript.exe "$(IMENIK_ASKUPNO)\MSI.wsf" //Job:NastaviCAB //Nologo "$(@:"=).tmp" "$(MSI_DATOTEKA_INF)" $(MSI_NASTAVI_CAB_STIKALA)
	msiinfo.exe "$(@:"=).tmp" /nologo /U 4
!IFDEF MANIFESTCERTIFICATETHUMBPRINT
	signcode.exe -i "$(MSIBUILD_VENDOR_URL)" -sha1 "$(MANIFESTCERTIFICATETHUMBPRINT)" -t "$(MANIFESTTIMESTAMPURL)" -n "$(MSIBUILD_PRODUCT_NAME)" "$(@:"=).tmp" > NUL
!ENDIF
	attrib.exe +r "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL
