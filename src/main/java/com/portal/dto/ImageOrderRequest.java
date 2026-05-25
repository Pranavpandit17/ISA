package com.portal.dto;

import java.util.List;

public record ImageOrderRequest(List<Long> imageIds) {
}
