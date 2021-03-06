#
#    Copyright © 1991-2021 Amebis
#    Copyright © 2016 GÉANT
#
#    This file is part of MSIBuild.
#
#    MSIBuild is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    MSIBuild is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with MSIBuild. If not, see <http://www.gnu.org/licenses/>.
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
MSIBUILD_SETCAB_SWITCH=/E
!ELSE
MSIBUILD_SETCAB_SWITCH=
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
	signtool.exe sign /sha1 "$(MANIFESTCERTIFICATETHUMBPRINT)" /fd sha256 /tr "$(MANIFESTTIMESTAMPRFC3161URL)" /td sha256 /d "$(MSIBUILD_PRODUCT_NAME)" /q "$(@:"=).tmp"
!ENDIF
	attrib.exe +r "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL
