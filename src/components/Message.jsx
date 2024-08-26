import { Avatar, HStack, Text } from '@chakra-ui/react'
import React from 'react'
function Message({text , uri , user}) {
  return (
    <>
        <HStack alignSelf={user === 'me'?'flex-end':'flex-start'} py={2} px={4} borderRadius={"base"} bg={'gray.100'}>
            {
                (user === "other" || user === undefined) && <Avatar src={uri} />
            }
            <Text>{text}</Text>
            {
                user === 'me' && <Avatar src={uri} />
            }
        </HStack>
    </>
  )
}

export default Message
