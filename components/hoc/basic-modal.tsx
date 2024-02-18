import { Box, Modal, Stack, Typography } from "@mui/material"
import React from "react"
import CloseIcon from "@mui/icons-material/Close"
import { theme } from "@/lib/theme"

export default function BasicModal({ open, handleClose, style,Component }: any) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Stack
          style={style}
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10%",
              right: "10%",
              cursor:"pointer"
            }}>
            <CloseIcon  sx={{color:"white",fontSize:"40px"}}/>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Box sx={{ color: "white" }}>{Component}</Box>
          </Box>
        </Stack>
      </Modal>
    </>
  )
}
