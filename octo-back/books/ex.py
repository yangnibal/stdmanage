import olefile

f = olefile.OleFileIO("../media/변환_Level_-_1.hwp")
e = f.openstream("PrvText").read()
d = e.decode("UTF-16")

i="""Unit 1. 인칭대명사의 종류

대명사란 동일한 명사의 반복적인 사용을 막기 위해 명사를 대신해서 사용하는 것을 의미하며,
그 중에서 사람을 가리키는 것을 인칭대명사라고 합니다.

<><주격><소유격><목적격><소유대명사>
<단수>< I    ⇨ 나는  >< my  ⇨ 나의 >< me  ⇨ 나를/나에게><mine  ⇨ 나의 것>< You ⇨ 너는 >< your ⇨ 너의>< you  ⇨ 너를/너에 게>< yours ⇨ 너의 것>< He  ⇨ 그는>< his  ⇨ 그의 >< him  ⇨ 그를/그에게>< his   ⇨  그의 것>< She ⇨ 그녀는>< her  ⇨ 그녀의>< her  ⇨ 그녀를/그녀에게>< hers  ⇨ 그녀의 것>< It   ⇨ 그것은>< its   ⇨ 그것의>< it    ⇨ 그것을/그것에게><       X >
<복수>< We ⇨ 우리는>< our  ⇨ 우리의>< us   ⇨ 우리를/우리에게>< ours  ⇨ 우리의 것>< You ⇨ 당신들은 >< your ⇨ 당신들의>< you  ⇨ 당신들을>< yours  ⇨ 당신들의 것>< They ⇨ 그(것)들은>< their ⇨ 그(것)들의>< them ⇨ (것)들을/그들에게>< theirs  ⇨ 그(것)들의 것>

 영어에서는 말하는 사람이 처음에 「나의 아빠는」이라고 말을 하면, 그 다음부터 말할 때는
「나의 아빠」를 반복적으로 말하지 않고, 남자이므로 대명사인 「그는」이라고 말합니다.
(1) 주격

   주어(주체) 자리에 쓰이는 사람이나 사물을 나타내는 대명사들을 가리키며,
   -은, -는, -이, -가」로 해석합니다.

Your brother is tall.   ⇨ He is tall.
My sister is pretty.   ⇨ She is pretty.
This book is fun.  ⇨ It is f"""
print(len(i))