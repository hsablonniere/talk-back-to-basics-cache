        �  �      ���������[\gK�åXB@̭R��Sm            (�/�`�E F7# ��q�>ѴP2�Ѡ�@;�羐��MY*�IBC�, . . Q�'� ��G���=��H{vw������Xc� 9� HcVbg�JE���HxD6S�\*6�/�;������Z�6������@�zf�|�"�SIi�&��SI�6`q���)�����wAAc������A���R={N�W9(b_^�WB-�T����o,~�@m��E�-�/�TK�b�@#IPA���`�,B!3��e~�l�|���r�}�9Ǟ^�بf�8���b�XN��6�i��:*�rn@�B�N���*n�2)%F�d���!`�]-�R\���8ۿ��|�SZ��Z�onn���gXQf�-4���S��:�U%M�*�����-����    �     *  �      �    �����*�Y3P�>*'�_t�N��8                       
# Copyright (C) Igor Sysoev

    �     �       �   �����9Ĝյ�*?N�^/F��B            (�/�` � r�)+pK�觀QUU��:IH��B#�/���Q�6�^�|������=�����ȑTKXXN���W0?�7I�C�9��ZR�!���Lgh���TS�"D@�;��y��C]��@R�p���N�ǮI��&%.Z�1|XRpV�����`��h�����D������Ə�� D�B�2���(�v�M�5�1p�u4U�R(._��S1��"m�|    �     s  �     �   ����(�͉F�cy��]���ʜ�]              �  �   (    if [ $NGX_PLATFORM != win32 ]; then
    3   '        ngx_feature_name="NGX_OPENSSL"
    A             y  R     �   ����&06*�Z�=^D/���            (�/� �� T  � 	    esac
  � bcase "$NGX_SYSTEM" in
SunOS|Linux)CORE_LIBS="$ -ldl";;�  �   

 qx�R^*A 8+q�3``��    �     6  T     �   ����#��	���s6�2�'��;8                F   *    if [ "$NGX_PLATFORM" != win32 ]; then
    �       �        ��������ѻMf���az���{               i   �      �  �        �     ^  .     1   ������l��`T~���1�l��            (�/� �� �  � �
 case "$NGX_SYSTEM" inSunOS)CORE_LIBS="$ -ldl";;esac
	 6<�,/��:� uΐG    9     7  x     A   ���������TG;B��3�u&��            (�/� bu �   �% have=NGX_SSL . auto/
  < �*`��M�p�9"    p    �  �     G   ����q��FgB�H�)� fj            (�/�`�= vUK6P	� �� )1P�H|G$	�Zs�ճ�=����f��
Ě-���M ��= < = f'ڮ7jJ�j�X�3�Ҏ�ѰB;�y6�сٱ����`r��\Tl��uw703t`����{�]wbB�|�3F+F+�h|��?]�jfiT��s[D �F�� �$�M��+��B��u�c��@��@'`����F�u0:f���f��
�wޝ^�"X�UE�$q3����X�NP���]N6�i%��$U�.�e=9M$Eʉ���m�A�[���t��PE�K-�()a��w���eu��?J��bF� �@�p 9e5 c�� Ib�1��S����AT��*o,WV�
 ��&�s@�}:&�*�q1�~K��QqK�_A��1�V$`��W�W���?�.�
qՐ�����\�B��0�DV.k�)�d%SΑ��+*�(���i7��<@�G]4]��g�������0�G�z����y    a     *  �   	  k   	����-Q���l�ΣX��xK�@�G              �  �               ngx_feature_path=
    �     �  v   
  
�   
������E���l���  ��vI^            (�/�`v� 4   |�
 cl|bcc32)have=NGX_OPENSSL . auto/
 LINK_DEPS="$ $/out32/ssleay32.lib"
CORE_LIB
lib#  requires gdi and advap;;

  1  �   y  ����������;����@�8� #q�#�A,M�6NE\
Xn
���4	1&�1�R��    e     ]  :     
�   �����q��R�"���f9n�3$Ȱ�            (�/� Υ   �  U   [ # libeay32.lib requires gdi
  CORE_LIBS="$"
    � ���`/E��w�c4�    �     K  F        ��������8���IKD�����e            (�/� � �  t  �   . CORE_LIBS="$ $NGXDL"
  �  �   :  IX�U�j�d�E'�         �  �        �����b~x���Ʉ1�w���P �            (�/�`� M �	#(p�����.��S�B��� (M4�DuI'�fýp��C2x�8���g ?�MmGUyx���"Q����y<��g����&)�R����a3.6�9 ��wŔ��Svrn�E`�d!,��7���&�V��ʂ�������� [ �ڀl<��0w��px� ��D�'^ e������ᢷڎe�� �    �     ~  �     9   �����(���MR�O~JS{!����            (�/�` �   �  }   CORE_INCS="$ $OPENSSL/openssl/include"
DEPssl.hLIBlib/libacrypto.a"
 D�8�X �h"�� /�2_epW{�� _    	^     f  �     <   ������q]?[�ɒ�E����#?�            (�/� t� �  �   G  H �  �   D CORE_LIBS="$ $ngx_feature_libs $NGXDL"
    �     �
��H�=hF G    	�     �  	&     M   �����A'��/!�6�b*l�#��            (�/�`> e �)%��!3�0�*��O+3	��X�<��Cq�m�vSj80���vV��Ǚ��0C�bC{���Rz�&Ir��Z��?z������Yfx�����M�Z�k�mE�L����\��{�ۜ�i�kb�v�'^0� ���?��p|u��}��h<��|O�)�+�;1f��n ��  xm�r��kEE�TRx.� �;����Oqf<8"    
�     �  	*     `   �����vR"����4�BR�{Q��            (�/�` � 4  �  �   CORE_INCS="$ $OPENSSL/.openssl/include"
DEP/ssl.hLIBlib/libacrypto.a"
 E�$� �p")f/,� d�W۽�� _         T  	�     �   �����(Ĺ�������`�K�T>�            (�/� l] �  O ` # OpenSSL 1.0.0 requires crypt32.lib
 CORE_LIBS="$"
 Qq�R��y83    n    [  �     c   ����Nߕ�,Tu����E$���1�w            (�/�`8�
 vQ@7pQ� ��������a&� �2I-%U��$�LR�[��	�um�L�Df	Ȧ�3�l41 2 1 ���{@d�l�J������3���P��4,0��Ư���D�'�q��(���,�N���i�ɏU+�,m3�a�Uf�{Rۮ%�
�Q/I��12��Nݰi��ͺD!��:+�{�ʋ�,�qh��Zq�n&}�ke	�vB��2Ҽ�_�����6 �}�%i�,�M!�8HQ���vr/V.��h�		� [x3�tv7
��0,��PB/� ���{[�m|��Rv��M�5�1p�:�PX�V
��+�
�H 0�))� ���    �     Z  �     d   ����}�Բ��A~[�J�	�*&            (�/� [� 4  u  �   4 fi
fi
if [ $OPENSSL != YES ]; then
  �  �   exit 1
 ��s,���    #     (  �     <   ��������>3t_�;gp�0�=                     # Copyright (C) Nginx, Inc.
    K     p  l     �   ����q�,8�a5���ȎY            (�/� �= $  n �
 if [ "$NGX_PLATFORM" = win32 ]; thenCORE_LIBS="$ -lgdi32 -lcryptws2_32"fi
 E8�宗J RuΐG    �    &  �     !   �����7�²O��@=J�)Y{i�            (�/�`"� 2�&#0o� �%-��Y��H$������M��zc gH�6�b����Pۑ��ELB��7aH�+��,�>���ӴQ��zā��D04RB�B��%i����A��aTw�f�4=�4.�CZɱY6�{B���8��R�7����C\�ȹ�8�O<j �P�3 `"�0��(:����	��� � �2�0ZQV�p�L�B ��Y��Z`Z୞�\�IWLPr�-���)+��0BU�q�ɟD��`Rp��6-U;��et�ˏñ�_�K�AtL7�&    �     ;  �     �   �����A�U�]G~}���b���            (�/� A� t  � 5 CORE_INCS="$ $ngx_feature_path"
 /%��xpD         H  ~     �   ������Ԏ�OIKX��M �Ό�H            (�/� M� D  @  n   G   5 CORE_LIBS="$ $ngx_feature_libs"
 /%�8    d     �  �        �����C��$�P_JS�Ȍb뿮            (�/�`�� "I#-��Z ��f���̌[PTE(���;�t�߱t����i�$��j.��~�
��,|8��p��W8p��o�|���U�Z��Rw?���m>�X��
�zo��t��Ҭ�<+�P-`�/0��<��Q�PO|�DiH&�TG�f> �  *� ��<.T[` 
�u��ˮ�f2E0>�^@b ���h�`p�	@ �?Z���KI83    E     D       X   ����;�0�B�'��(jx�*$	���              6  d   8        ngx_feature_test="SSL_CTX_set_options(NULL, 0)"
    �     �  7     �   ����S�>w�]Cv���$��>��            (�/�`� m R�$p������w����uS����2�!��[��u��ΊY���&h��%��H�`Ȧ��'�?��ڪ���� G� ��=c�ڊ��:[rS����I���*yO=#jD�?xRn�e7 إ,� Mx%��~� th4�ua�P�P��@0�m_�D�i��Vu(    @           N   �������f�S?F1��rD�RA�.            (�/�`�u r�'-p� ����:
D#�4;�E�VF��I��4!2�IZJ��g�^<���1d�y�$e�_�y��M|��7�?ď��U�����Lb�m�}�y���P>C��~�f�i����F��*:
�H� �H������`���*FY�$X#�. p#H� ����g�t��CC�C`1�`�@\ࡀ��	2$��B4@.t�@�j`#���	���=�1ɒ�!��� ���,I� �pF2��O,s�oIȌ�@