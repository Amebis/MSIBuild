#
#    MSIBuild, Copyright (C) Amebis
#
#    This program is free software; you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation; either version 2 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
#
#    See the GNU General Public License for more details, included in the file
#    LICENSE.rtf which you should have received along with this program.
#
#    If you did not receive a copy of the GNU General Public License,
#    write to the Free Software Foundation, Inc., 675 Mass Ave,
#    Cambridge, MA 02139, USA.
#
#    Amebis can be contacted at http://www.amebis.si
#

!IFNDEF MSIBUILD_ROOT
!ERROR Parameter MSIBUILD_ROOT is undefined.
!ENDIF

!IFNDEF MSIBUILD_TARGET_MSI
!ERROR Parameter MSIBUILD_TARGET_MSI is undefined.
!ENDIF

!IFNDEF MSIBUILD_SOURCE_MSI
!ERROR Parameter MSIBUILD_SOURCE_MSI is undefined.
!ENDIF

!IFNDEF MSIBUILD_INF
!ERROR Parameter MSIBUILD_INF is undefined.
!ENDIF

!IFDEF MSIBUILD_CAB
MSIBUILD_SETCAB_SWITCH=/V
!ELSE
MSIBUILD_SETCAB_SWITCH=
!ENDIF

!IFNDEF MSIBUILD_VENDOR_URL
!ERROR Parameter MSIBUILD_VENDOR_URL is undefined.
!ENDIF

!IFNDEF MSIBUILD_PRODUCT_NAME
!ERROR Parameter MSIBUILD_PRODUCT_NAME is undefined.
!ENDIF


All : \
	"$(MSIBUILD_TARGET_MSI)"

"$(MSIBUILD_TARGET_MSI)" : \
	"$(MSIBUILD_SOURCE_MSI)" \
!IFDEF MSIBUILD_CAB
	"$(MSIBUILD_CAB)" \
!ENDIF
	"$(MSIBUILD_INF)"
	-if exist $@ del /f /q $@
	copy /y "$(MSIBUILD_SOURCE_MSI)" "$(@:"=).tmp" > NUL
	cscript.exe "$(MSIBUILD_ROOT)\MSI.wsf" //Job:SetCAB //Nologo "$(@:"=).tmp" "$(MSIBUILD_INF)" $(MSIBUILD_SETCAB_SWITCH)
	msiinfo.exe "$(@:"=).tmp" /nologo /U 4
!IFDEF MANIFESTCERTIFICATETHUMBPRINT
	signtool.exe /sha1 "$(MANIFESTCERTIFICATETHUMBPRINT)" /t "$(MANIFESTTIMESTAMPURL)" /d "$(MSIBUILD_PRODUCT_NAME)" /du "$(MSIBUILD_VENDOR_URL)" /q "$(@:"=).tmp"
!ENDIF
	attrib.exe +r "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL
